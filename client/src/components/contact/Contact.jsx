import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  useTheme
} from '../../mui/muiComponents';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';
import CustomButton from '../button/CustomButton';
import { Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Email, LocalPhone } from '@mui/icons-material';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const theme = useTheme();
  const headingRef = useRef();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!form.fullName || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Optional: preserve server database logging if endpoint is active
    fetch('https://MANOJ P-portfolio-server.onrender.com/api/users/contact', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).catch(err => console.error('Click log error:', err.message));

    const templateParams = {
      from_name: form.fullName,
      name: form.fullName,
      from_email: form.email,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      title: form.subject,
      message: form.message,
      to_name: 'Manoj P',
    };

    try {
      if (!serviceId || !templateId || !publicKey) {
        // Warning if environment keys are not configured yet
        console.warn('EmailJS environment keys not set. Check your .env file.');
        toast.info('Form submitted! Please configure VITE_EMAILJS keys in .env to receive emails directly in your inbox.');
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        toast.success('Great! I’ve received your message and will respond as soon as possible.');
      }

      setForm({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      toast.error('Failed to send message via EmailJS. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <Box id="contact">
      <Container
        maxWidth="sm"
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          p: 4,
          borderRadius: 2,
          background: `
            linear-gradient(
            180deg,
            #0f172a 0%,
            #020617 100%)`,
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.05),
            0 20px 40px rgba(0,0,0,0.6)`,
        }}
      >
        <Typography
          ref={headingRef}
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Get in Touch
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Fill out the form and I'll get back to you as soon as possible.
        </Typography>

        <Box
          ref={formRef}
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={3}>
            <TextField
              size="small"
              label="Full Name"
              name="fullName"
              variant="outlined"
              fullWidth
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder='Manoj P'
            />
            <TextField
              size="small"
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={form.email}
              onChange={handleChange}
              placeholder='manoj20062707@gmail.com'
            />
            <TextField
              size="small"
              label="Phone Number"
              name="phone"
              type="tel"
              variant="outlined"
              fullWidth
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 93456 32035"
            />
            <TextField
              size="small"
              label="Subject"
              name="subject"
              variant="outlined"
              fullWidth
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="e.g., Software Testing or Full-Stack Role"
            />
            <TextField
              label="Your Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="I'd like to discuss a potential opportunity..."
            />
            <CustomButton
              type="submit"
              variant="outlined"
              size="large"
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              sx={{ alignSelf: 'flex-end' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </CustomButton>
          </Stack>

          <Divider
            sx={{ my: 4, color: 'text.secondary' }}
          >
            <Typography>
              Best way to reach me is via
            </Typography>
          </Divider>
          <Stack direction={'row'} justifyContent={'center'} gap={2}>
            {[
              { icon: <LocalPhone />, contact: '+919345632035' },
              { icon: <Email />, contact: 'manoj20062707@gmail.com' },
            ].map((item, i) => (
              <Link
                to={item.icon.type === LocalPhone
                  ? `tel:${item.contact}`
                  : `mailto:${item.contact}`}
                key={i}>
                <IconButton
                  sx={{
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 0 12px rgba(0,229,255,0.35)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0,229,255,0.65)',
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Link>
            ))}
          </Stack>

        </Box>
        <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
      </Container>
    </Box>
  );
}

export default Contact;
