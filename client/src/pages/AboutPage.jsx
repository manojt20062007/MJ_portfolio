import { Box, Stack, Grid, useMediaQuery, useTheme, Typography, Button, IconButton } from "../mui/muiComponents";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCloud,
  FaBolt, // used as GSAP icon
} from 'react-icons/fa';

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiMui,
  SiDjango,
  SiReactrouter,
  SiNextdotjs
} from 'react-icons/si';
import { GitHub, LinkedIn, Email, Contacts, X } from '@mui/icons-material';

// Animation
import { } from "@gsap/react";
import { } from "gsap/ScrollTrigger";
import gsap from "gsap";

// image
import manojProfile from '../assets/images/behan.png'

// component.
import Capabilities from '../components/capabilities/Capabilities';
import { Divider } from "@mui/material";


const skills = [
  { label: "Python", icon: <FaPython color="#3776AB" /> },
  { label: "Java", icon: <FaJs color="#F7DF1E" /> },
  { label: "C Language", icon: <FaBolt color="#007FFF" /> },
  { label: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { label: "React.js", icon: <FaReact color="#61DBFB" /> },
  { label: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { label: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { label: "Flask", icon: <SiDjango color="#000000" /> },
  { label: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { label: "PostgreSQL", icon: <FaCloud color="#336791" /> },
  { label: "Git & GitHub", icon: <FaGitAlt color="#F1502F" /> },
  { label: "Postman", icon: <FaBolt color="#FF6C37" /> },
  { label: "Kali Linux", icon: <FaCloud color="#557C93" /> },
  { label: "Nmap & Wireshark", icon: <FaBolt color="#1675A9" /> },
  { label: "OWASP Top 10", icon: <FaBolt color="#FF9900" /> },
  { label: "Secure Coding", icon: <FaBolt color="#00E5FF" /> },
];

function AboutPage() {

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      component={'section'}
      sx={{
        position: 'relative',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 6, md: 15 },
        px: { xs: 2, md: 4 },
      }}>

      {/* Hero */}
      <Box sx={{
        py: 6,
        textAlign: 'center',
      }}>

        <Typography variant={isSm ? 'h4' : 'h2'} color="text.primary" gutterBottom>
          Cybersecurity Enthusiast & Full-Stack Developer
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: { xs: '100%', md: 720 }, mx: 'auto', lineHeight: 1.8 }}
        >
          Computer Science & Engineering student with hands-on experience in software testing,
          secure application development, cryptography, and full-stack web applications.
        </Typography>

      </Box>

      {/* == Short Introduction (Who You Are) == */}
      <Box
        component={'section'}
        sx={{
          display: 'flex',
          flexDirection: (isSm || isMd) ? 'column' : 'row',
          gap: isLg ? 6 : 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Profile Details Card */}
        <Stack
          sx={{
            overflow: 'hidden',
            borderRadius: 2,
            p: 3,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography variant="h5" color="text.primary" fontWeight={700} textAlign="center">
            MANOJ P
          </Typography>
          <Typography variant="body2" color="primary.main" textAlign="center" mt={0.5}>
            Chennai, India
          </Typography>
          <Typography variant="caption" color="text.secondary" textAlign="center" mt={1}>
            manoj20062707@gmail.com | +91 93456 32035
          </Typography>

          {/* Divider */}
          <Divider sx={{
            mt: 2,
            mb: 2,
            width: '100%',
          }}>
            <Typography variant="caption" color="text.secondary">
              Connect With Me
            </Typography>
          </Divider>
          <Stack direction="row" spacing={1}>
            {[
              { icon: <GitHub />, href: 'https://github.com/manojt20062007', external: true },
              { icon: <LinkedIn />, href: 'https://linkedin.com/', external: true },
              { icon: <Email />, href: 'mailto:manoj20062707@gmail.com', external: true },
              { icon: <Contacts />, to: '/contact', external: false },
            ].map((item, i) => (
              <IconButton
                key={i}
                component={item.external ? 'a' : Link}
                href={item.external ? item.href : undefined}
                to={!item.external ? item.to : undefined}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                sx={{
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 0 12px rgba(0,229,255,0.35)',
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        {/* Intro */}
        <Stack flex={1} spacing={3} textAlign={'justify'} sx={{ px: { xs: 0, md: 2 } }}>
          <Typography variant="h4">Manoj P</Typography>

          <Typography color="primary.main" fontWeight={600}>
            Cybersecurity Enthusiast • Software Testing • Full-Stack Developer
          </Typography>

          <Typography color="text.secondary">
            I am a B.E. Computer Science Engineering student (2024–2028) at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College with a CGPA of 8.92/10.
          </Typography>

          <Typography color="text.secondary">
            My core focus areas are application security, software testing, and full-stack web development. I have hands-on internship experience performing functional and regression testing on enterprise cloud software, as well as building encrypted applications and live web platforms.
          </Typography>

        </Stack>
      </Box>

      {/* == Education & Internship == */}
      <Box>
        <Typography variant={isSm ? "h4" : "h3"} color="text.primary" gutterBottom>
          Education & Experience
        </Typography>

        <Grid container spacing={3} mt={1}>
          {/* Internship */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
                height: '100%',
              }}
            >
              <Typography variant="h6" color="primary.main" fontWeight={600}>
                Software Testing Intern
              </Typography>
              <Typography variant="subtitle2" color="text.primary">
                KY Technologies (Jun 2026 – Jul 2026)
              </Typography>
              <Box component="ul" sx={{ pl: 2, mt: 1.5, color: 'text.secondary', lineHeight: 1.7 }}>
                <li>Performed functional and regression testing on the TIHVO Cloud BPM platform.</li>
                <li>Executed test cases, reported defects, validated workflows and role-based access control.</li>
                <li>Collaborated closely with developers to verify bug fixes and enhance software quality.</li>
              </Box>
            </Box>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
                height: '100%',
              }}
            >
              <Typography variant="h6" color="primary.main" fontWeight={600}>
                B.E. Computer Science & Engineering
              </Typography>
              <Typography variant="subtitle2" color="text.primary">
                Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                <strong>CGPA:</strong> 8.92 / 10 | Expected Graduation: May 2028
              </Typography>
              <Typography variant="subtitle2" color="text.primary" mt={2}>
                Dr. V.G.N. Matric Hr. Sec. School
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HSC: 76% (2024) | SSLC: 78.6% (2022)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* == Tech Stack / Skills (What You Use) == */}
      <Box>
        <Stack maxWidth={800}>
          <Typography
            variant={isSm ? "h4" : "h3"}
            color="text.primary"
            gutterBottom
          >
            Technical Skills & Tools
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Languages, security tools, frameworks, and databases I specialize in:
          </Typography>
        </Stack>
        <Grid container spacing={2} mt={3}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                sx={{
                  backdropFilter: 'blur(8px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'text.primary',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  py: 1,
                  px: 2,
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textAlign: 'center',
                  transition: '0.3s',
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                {skill.icon}
                {skill.label}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* == Value == */}
      <Box>
        <Typography variant="h3" gutterBottom>
          Engineering Principles
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mt: 2,
          }}
        >
          {[
            'Security-first mindset & Cryptographic best practices',
            'Rigorous software testing & defect prevention',
            'Clean, maintainable full-stack application architecture',
            'Continuous learning in cloud security & vulnerability assessment',
          ].map((text, i) => (
            <Typography key={i} color="text.secondary" lineHeight={1.8}>
              • {text}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* What i am looking for */}
      <Box>
        <Typography variant="h3" gutterBottom>
          What I’m Looking For
        </Typography>

        <Stack spacing={2} maxWidth={800}>
          <Typography color="text.secondary">
            • Internship and junior software engineer / testing roles in security and web development
          </Typography>
          <Typography color="text.secondary">
            • Teams building secure, high-performance web products
          </Typography>
          <Typography color="text.secondary">
            • Opportunities to contribute in Software QA, Full-Stack development, and Application Security
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default AboutPage;