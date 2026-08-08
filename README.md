# Manoj P Portfolio

A modern, full-stack developer portfolio website that highlights my skills, projects, and professional profile. Built with **React + Material UI** on the frontend and **Node.js + Express** on the backend, this portfolio is designed for performance, clarity, and real-world functionality — ideal for job applications and networking.

## 🌐 Live Preview

🔗 [Visit Live Portfolio](https://github.com/manojt20062007)

---

## 🚀 Features

- ✅ **About Me** – Introduction with career summary & education
- 🛠 **Tech Stack** – Tools, security technologies, and languages
- 📁 **Projects Showcase** – Featured work with live links and GitHub code
- 📄 **Resume Download** – Downloadable resume PDF
- 📨 **Contact Form** – Email delivery with backend handling

---

## 🛠 Tech Stack

### Frontend:
- React 19
- Material UI (MUI v7)
- React Router v7
- GSAP & ScrollTrigger

### Backend:
- Node.js
- Express.js
- MongoDB / Mongoose ORM
- dotenv & CORS

---

## 📂 Project Structure

```
manoj-portfolio/
├── client/
│ ├── public/
│ │ ├── Manoj_P_Resume.pdf
│ │ └── logo.png
│ └── src/
│ ├── assets/ # Images, logos
│ ├── components/ # Reusable UI components
│ ├── pages/ # About, Projects, Contact
│ ├── theme/ # MUI theme customization
│ ├── context/
│ ├── layout/
│ ├── routers.jsx # Main layout and routing
│ └── main.jsx # Entry point
├── server/
│ ├── controllers/ # Logic for contact & log routes
│ ├── config/ # DB config
│ └── server.js # Main entry point
└── README.md
```

---

## 🧑‍💻 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/manojt20062007/portfolio.git
cd portfolio

# Start the backend
cd server
npm install
npm run dev

# Start the frontend
cd ../client
npm install
npm run dev
```

## Environment Setup
Make sure to set up a `.env` file in `/server` with:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
```
    
    ⚠️ Never commit real credentials. Use environment variables. (.env is ignored in .gitignore)
    ```

## 📝 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.
---