const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'public/projectImages')
];

async function optimizeImages() {
  let totalOriginal = 0;
  let totalNew = 0;

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (!stat.isFile()) continue;

      const ext = path.extname(file).toLowerCase();
      if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

      const originalSize = stat.size;
      totalOriginal += originalSize;

      const tempFile = path.join(dir, `_opt_${file}`);

      try {
        let pipeline = sharp(filePath);
        const metadata = await pipeline.metadata();

        // Resize if width > 1200px
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
        }

        if (ext === '.png') {
          pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
        } else {
          pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        }

        await pipeline.toFile(tempFile);

        const newStat = fs.statSync(tempFile);
        if (newStat.size < originalSize) {
          fs.unlinkSync(filePath);
          fs.renameSync(tempFile, filePath);
          totalNew += newStat.size;
          console.log(`Optimized ${file}: ${(originalSize / 1024).toFixed(1)} KB -> ${(newStat.size / 1024).toFixed(1)} KB (-${((1 - newStat.size / originalSize) * 100).toFixed(1)}%)`);
        } else {
          fs.unlinkSync(tempFile);
          totalNew += originalSize;
          console.log(`Kept original ${file}: ${(originalSize / 1024).toFixed(1)} KB`);
        }
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err.message);
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        totalNew += originalSize;
      }
    }
  }

  console.log(`\nTOTAL REDUCTION: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB -> ${(totalNew / (1024 * 1024)).toFixed(2)} MB (-${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
}

optimizeImages();
