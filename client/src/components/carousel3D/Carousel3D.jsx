import { useRef, useEffect, useState } from 'react';
import { Box, Typography, Stack, Link, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import gsap from 'gsap';
import CarouselCard from './CarouselCard';
import CustomButton from '../button/CustomButton';

const items = [
    {
        id: 1,
        title: 'Abdul Kalam Association Website (Live)',
        description: `Designed and deployed a live association management web portal using React.js and Vercel. Features responsive UI layout, event showcases, and membership management.`,
        link: `https://github.com/manojt20062007/WebPageAssociation`,
        sourceCode: `https://github.com/manojt20062007/WebPageAssociation`,
        image: '/apj.png'
    },
    {
        id: 2,
        title: 'Full-Stack E-Commerce Platform',
        description: `Built a full-stack e-commerce web application with role-based access for Admin, Seller, and Customer roles. Features product catalog, order workflows, and inventory management.`,
        link: `https://github.com/manojt20062007/Ecommerce-Product`,
        sourceCode: `https://github.com/manojt20062007/Ecommerce-Product`,
        image: '/ecom.png'
    },
    {
        id: 3,
        title: 'HRMS - Human Resource Management System',
        description: `Enterprise human resource management platform built with TypeScript. Features employee record management, attendance tracking, and role-based permissions.`,
        link: `https://github.com/manojt20062007/HRMS`,
        sourceCode: `https://github.com/manojt20062007/HRMS`,
        image: '/hrms.png'
    },
    {
        id: 4,
        title: 'Secure Encrypted Chat Application',
        description: `Developed an encrypted messaging platform using Python, Flask, AES-GCM encryption, and SHA-256 hashing. Features secure user authentication and encrypted message storage.`,
        link: `https://github.com/manojt20062007`,
        sourceCode: `https://github.com/manojt20062007`,
        image: '/2k.png'
    },
    {
        id: 5,
        title: 'Enterprise Billing System Application',
        description: `Retail and commercial billing software designed for fast invoice generation, transaction calculation, tax management, and client record keeping.`,
        link: `https://github.com/manojt20062007/BillingSystemVC2026`,
        sourceCode: `https://github.com/manojt20062007/BillingSystemVC2026`,
        image: '/ecom1.png'
    },
];

const Carousel3D = () => {
    const theme = useTheme();
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(2);
    const isSm = useTheme().breakpoints.down('sm');
    const isMd = useTheme().breakpoints.down('md');
    const isLg = useTheme().breakpoints.down('lg');

    const rotateCarousel = (direction) => {
        const newIndex = (currentIndex + direction + items.length) % items.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const cards = containerRef.current.children;
        const angle = 50;

        Array.from(cards).forEach((card, i) => {
            const offset = i - currentIndex;
            const transform = `perspective(1000px) translateX(${offset * 320}px) rotateY(${offset * -angle}deg) scale(${offset === 0 ? 1 : 0.82})`;
            gsap.to(card, {
                duration: 0.6,
                transform,
                zIndex: offset === 0 ? 10 : 1,
                ease: 'power3.out',
            });
        });
    }, [currentIndex]);

    const current = items[currentIndex];

    return (
        <>
            <Stack maxWidth={800} mt={10}>
                <Typography
                    variant="h4"
                    color="text.primary"
                    gutterBottom
                >
                    Projects In Live
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    A selection of real-world applications I’ve designed, developed, and deployed.
                </Typography>
            </Stack>

            <Box sx={{ textAlign: 'center', px: 2 }}>
                <Box
                    sx={{
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 5,
                        px: 2,
                        overflow: 'hidden'
                    }}
                >
                    {/* Prev Button */}
                    <CustomButton
                        onClick={() => rotateCarousel(-1)}
                        variant="outlined"
                        sx={{
                            py: 0.6,
                            px: 2.5,
                            borderRadius: 999,
                            fontSize: '0.85rem',
                            letterSpacing: 1,
                            textTransform: 'uppercase',

                            color: theme.palette.text.primary,
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',

                            border: `1px solid ${theme.palette.primary.main}`,
                            boxShadow: '0 0 10px rgba(0,229,255,0.15)',
                            zIndex: 2,

                            transition: 'all 0.3s ease',

                            '&:hover': {
                                background: 'rgba(0,229,255,0.15)',
                                boxShadow: '0 0 18px rgba(0,229,255,0.35)',
                                transform: 'translateY(-2px)',
                            },

                            '&:active': {
                                transform: 'translateY(0)',
                                boxShadow: '0 0 8px rgba(0,229,255,0.25)',
                            },
                        }}
                    >
                        Prev
                    </CustomButton>

                    {/* Carousel */}
                    <Box
                        ref={containerRef}
                        sx={{
                            position: 'relative',
                            width: { xs: '280px', md: '500px', lg: '620px' },
                            height: { xs: '200px', md: '280px', lg: '330px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            perspective: '1200px',
                            overflow: 'visible',
                            zIndex: 1,
                        }}
                    >
                        {items.map((item) => (
                            <CarouselCard key={item.id} item={item} />
                        ))}
                    </Box>

                    {/* Next Button */}
                    <CustomButton
                        onClick={() => rotateCarousel(1)}
                        variant="outlined"
                        sx={{
                            py: 0.6,
                            px: 2.5,
                            borderRadius: 999,
                            fontSize: '0.85rem',
                            letterSpacing: 1,
                            textTransform: 'uppercase',

                            color: theme.palette.text.primary,
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',

                            border: `1px solid ${theme.palette.primary.main}`,
                            boxShadow: '0 0 10px rgba(0,229,255,0.15)',
                            zIndex: 2,

                            transition: 'all 0.3s ease',

                            '&:hover': {
                                background: 'rgba(0,229,255,0.15)',
                                boxShadow: '0 0 18px rgba(0,229,255,0.35)',
                                transform: 'translateY(-2px)',
                            },

                            '&:active': {
                                transform: 'translateY(0)',
                                boxShadow: '0 0 8px rgba(0,229,255,0.25)',
                            },
                        }}

                    >
                        Next
                    </CustomButton>
                </Box>

                <Box sx={{ mt: 6, maxWidth: 700, mx: 'auto' }}>
                    <Typography variant="h5" sx={{ color: '#e0e0e0', mb: 1 }}>
                        {current.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#aaa', mb: 2 }}>
                        {current.description}
                    </Typography>

                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={2}
                        useFlexGap
                        flexWrap="wrap"
                        my={4}
                    >
                        <CustomButton
                            component={Link}
                            href={current.link}
                            target="_blank"
                            rel="noopener"
                            variant="outlined"
                            disabled={current.link === '#'}
                            startIcon={<VisibilityIcon />}
                            sx={{
                                bgcolor: 'transparent', color: 'text.primary'
                            }}
                        >
                            Visit Site
                        </CustomButton>

                        <CustomButton
                            component={Link}
                            href={current.sourceCode}
                            target="_blank"
                            rel="noopener"
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            sx={{
                                bgcolor: 'transparent', color: 'text.primary'
                            }}
                        >
                            Source Code
                        </CustomButton>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default Carousel3D;
