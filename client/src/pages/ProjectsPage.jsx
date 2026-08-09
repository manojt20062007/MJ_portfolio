import { useRef } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
} from '../mui/muiComponents';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import components
import Carousel3D from "../components/carousel3D/Carousel3D"
import ProjectCards from '../components/ProjectCrads';
import RactangleFlower from '../components/ractangleFlower/RactangleFlower';

const cardItems = [
  {
    id: 1,
    title: 'Abdul Kalam Association Website (Live)',
    description: `Designed and deployed a live association management web portal using React.js and Vercel. Features responsive UI layout, event showcases, and membership management.`,
    link: `https://abdulkalamassociation.vercel.app/`,
    sourceCode: `https://github.com/manojt20062007/WebPageAssociation`,
    image: '/apj.png'
  },
  {
    id: 2,
    title: 'Full-Stack E-Commerce Platform',
    description: `Built a full-stack e-commerce web application with role-based access for Admin, Seller, and Customer roles. Features product catalog, order workflows, and inventory management.`,
    link: `https://manoj-product.vercel.app/`,
    sourceCode: `https://github.com/manojt20062007/Ecommerce-Product`,
    image: '/ecom.png'
  },
  {
    id: 3,
    title: 'HRMS - Human Resource Management System',
    description: `Enterprise human resource management platform built with TypeScript. Features employee record management, attendance tracking, and role-based permissions.`,
    link: `https://ln-pmjhrms.vercel.app/`,
    sourceCode: `https://github.com/manojt20062007/HRMS`,
    image: '/hrms.png'
  },
  {
    id: 4,
    title: 'Secure Encrypted Chat Application',
    description: `Developed an encrypted messaging platform using Python, Flask, AES-GCM encryption, and SHA-256 hashing. Features secure user authentication and encrypted message storage.`,
    link: `https://github.com/manojt20062007`,
    sourceCode: `https://github.com/manojt20062007`,
    image: '/sec.png'
  },
  {
    id: 5,
    title: 'Enterprise Billing System Application',
    description: `Retail and commercial billing software designed for fast invoice generation, transaction calculation, tax management, and client record keeping.`,
    link: `https://apjbilling.vercel.app/login`,
    sourceCode: `https://github.com/manojt20062007/BillingSystemVC2026`,
    image: '/ecom1.png'
  },
  {
    id: 6,
    title: 'PMJ Digital Agency Web Portal',
    description: `Modern agency web application featuring responsive grid layouts, service portfolios, interactive cards, and contact form integration.`,
    link: `https://pmjprojects.vercel.app/`,
    sourceCode: `https://github.com/manojt20062007/pmj-agency-portfolio`,
    image: '/pmj.png'
  },
  {
    id: 7,
    title: 'ABSSAI - Smart AI Automation Interface',
    description: `TypeScript smart automation interface designed for AI-assisted data processing, modular component design, and intuitive user workflows.`,
    link: `https://admin-abssai.vercel.app/dashboard`,
    sourceCode: `https://github.com/manojt20062007/ABSSAI`,
    image: '/abssai.png'
  },
  {
    id: 8,
    title: '2K Cini Mini Video Portal',
    description: `TypeScript media streaming frontend web application featuring short video highlights, movie categories, and responsive player interface.`,
    link: `https://github.com/manojt20062007/2kciniminivideos`,
    sourceCode: `https://github.com/manojt20062007/2kciniminivideos`,
    image: '/2k.png'
  },
  {
    id: 9,
    title: 'Ajith Kumar - VFX Freelance Portfolio',
    description: `Custom client portfolio website designed for a freelance VFX artist showcasing visual effects projects, showreels, responsive galleries, and contact integration.`,
    link: `https://ajithkumarak.vercel.app/`,
    sourceCode: `https://github.com/manojt20062007/AJITH-KUMAR`,
    image: '/22.png'
  }
];

function ProjectsPage() {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.from('.project-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.project-card',
        start: 'top 90%',
      },
    });

    gsap.fromTo(carouselRef.current, {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: carouselRef.current,
        top: "10%",
      }
    })
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      px: isSm ? 0 : 2,
      overflow: 'hidden',
    }}>
      <Box component="section" textAlign="center">
        <Typography
          ref={headingRef}
          variant="h2"
          fontWeight="bold"
          gutterBottom
        >
          Projects
        </Typography>
        <Typography
          ref={paragraphRef}
          variant="h6"
          color="text.secondary"
          maxWidth="sm"
          mx="auto"
        >
          Welcome to my project showcase! Below are some of the best works I've built from frontend interfaces to full-stack applications, each project reflects my journey, passion, and skill growth in web development.
        </Typography>
      </Box>

      <Box
        component="section"
        sx={{
          display: 'grid',
          gridTemplateColumns: isSm ? '1fr' : (isMd || isLg) ? 'repeat(2, 0.8fr)' : 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {cardItems.map((item) => (
          <ProjectCards key={item.id} item={item} />
        ))}
      </Box>

      {!isMd && (
        <>
          {/* === Decorative Rotating Rectangle Graphic === */}
          <Stack mb={-10} justifyContent="center">
            <RactangleFlower />
          </Stack>

          {/* ===  Carousel3D  === */}
          <Stack ref={carouselRef}>
            <Carousel3D />
          </Stack>
        </>
      )}

    </Box>
  );
}

export default ProjectsPage;
