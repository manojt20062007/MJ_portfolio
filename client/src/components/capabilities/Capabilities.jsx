import React, { useMemo, useRef } from 'react';
import { Box, Stack, Typography, useMediaQuery, useTheme } from "../../mui/muiComponents";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Capabilities() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.down("md"));

    const sectionRef = useRef(null);
    const boxRefs = useRef([]);

    const rainDrops = useMemo(
        () =>
            Array.from({ length: 12 }).map(() => ({
                left: Math.random() * 100,
                height: Math.random() * 20 + 35,
                delay: Math.random() * 2,
            })),
        []
    );

    const capabilitiesData = [
        {
            number: "01",
            label: "Cybersecurity & Secure Coding",
            description: `I focus on application security, encryption (AES-GCM), hashing algorithms (SHA-256), secure authentication, and mitigating OWASP Top 10 vulnerabilities. I utilize network tools like Kali Linux, Nmap, and Wireshark for security analysis.`,
        },
        {
            number: "02",
            label: "Software QA & Functional Testing",
            description: `Hands-on experience in software quality assurance, executing test cases, defect reporting, and regression testing on cloud enterprise platforms (TIHVO Cloud BPM). Experienced in validating workflows and role-based access controls.`,
        },
        {
            number: "03",
            label: "Full-Stack Web Development",
            description: `I build complete web applications using the MERN stack (MongoDB, Express, React, Node.js) and Python Flask. From responsive frontends to REST APIs and database design, I deliver clean, production-ready web solutions.`,
        },
        {
            number: "04",
            label: "Database Management & Version Control",
            description: `Proficient in designing and managing data with MongoDB and PostgreSQL databases. Experienced with Git/GitHub workflows, Postman API testing, and deploying frontend apps to Vercel.`,
        }
    ];

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                },
            });

            tl.from(boxRefs.current, {
                opacity: 0,
                y: 50,
                stagger: 0.4,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const numberBoxSx = {
        width: { xs: 32, md: 40 },
        height: { xs: 32, md: 40 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.main,
        letterSpacing: 2,
        backgroundColor: 'transparent',
        boxShadow: `0 0 8px ${theme.palette.primary.main}20`,
        borderRadius: 1,
    };

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                my: 6,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Stack maxWidth={800}>
                <Typography
                    variant="h4"
                    color="text.primary"
                    gutterBottom
                >
                    What I Do Best
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    These are the areas where I bring the most value — with hands-on experience, real projects, and problem-solving mindset.
                </Typography>
            </Stack>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: (isSm || isMd) ? "1fr" : "repeat(2, 1fr)",
                    gap: 4,
                    my: 4
                }}
            >
                {capabilitiesData.map((item, i) => (
                    <Stack
                        key={i}
                        ref={(el) => (boxRefs.current[i] = el)}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: 3,
                            p: { xs: 2, md: 4 },
                            minHeight: { xs: 140, md: 180 },
                            width: 'auto',
                            background: `
                            linear-gradient(
                                180deg,
                                #0f172a 0%,
                                #020617 100%
                            )
                            `,

                            boxShadow: `
                            inset 0 0 0 1px rgba(255,255,255,0.05),
                            0 20px 40px rgba(0,0,0,0.6)
                            `,
                        }}
                    >

                        {/* Rain Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                zIndex: 0,
                                pointerEvents: 'none',
                            }}
                        >
                            {rainDrops.map((drop, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: 'absolute',
                                        top: '-30%',
                                        left: `${drop.left}%`,

                                        /* diagonal drop body */
                                        width: 2,
                                        height: drop.height,

                                        background: `
                                        linear-gradient(
                                            to bottom,
                                            rgba(255,255,255,0) 0%,
                                            rgba(255,255,255,0.85) 50%,
                                            rgba(255,255,255,0) 100%
                                        )
                                        `,

                                        borderRadius: 2,
                                        transform: 'rotate(-25deg)',

                                        filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.35))',

                                        animation: 'diagonalRain 4s linear infinite',
                                        animationDelay: `${drop.delay}s`,

                                        '@keyframes diagonalRain': {
                                            '0%': {
                                                transform: 'translate(-140%, -140%) rotate(-25deg)',
                                                opacity: 0,
                                            },
                                            '10%': {
                                                opacity: 0.8,
                                            },
                                            '100%': {
                                                transform: 'translate(240%, 240%) rotate(-25deg)',
                                                opacity: 0,
                                            },
                                        },
                                    }}
                                />
                            ))}
                        </Box>

                        {/* Content */}
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Box sx={numberBoxSx}>{item.number}</Box>

                            <Typography
                                variant="subtitle1"
                                my={3}
                                fontSize="1.25rem"
                                fontWeight={600}
                                color="text.primary"
                            >
                                {item.label}
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                lineHeight={1.8}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Stack>
                ))}

            </Box>
        </Box>
    );
}

export default Capabilities;
