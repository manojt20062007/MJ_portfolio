import React, { useRef } from 'react';
import { Box, Typography } from '../../mui/muiComponents';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function Slider() {
    const sliderTextsPart1 = [
        "Cybersecurity & Application Security",
        "Software Quality Assurance & QA Testing",
        "AES-GCM Encryption & SHA-256 Hashing",
        "OWASP Top 10 Security Controls",
        "Full-Stack Web Development (MERN & Flask)",
        "Functional & Regression Testing (TIHVO Cloud BPM)",
        "Network Analysis with Nmap & Wireshark",
        "PostgreSQL & MongoDB Database Management",
        "Git / GitHub Version Control & Postman API Testing",
        "Secure Authentication & Role-Based Access Control"
    ];

    const sliderTextsPart2 = [
        "Python & Flask Encrypted Application Architecture",
        "Software Defect Reporting & Test Case Execution",
        "Ethical Hacking & Vulnerability Assessment (Kali Linux)",
        "Secure Application Development & Clean Code",
        "React.js & Component-Driven UI Interfaces",
        "Express.js & Node.js RESTful API Engineering",
        "Cloud Deployment & Vercel Web Hosting",
        "Data Structures, Algorithms & Computer Networks",
        "Hardware Integration (Arduino UNO & Sensors)",
        "Object-Oriented Programming & Software Engineering"
    ];

    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useGSAP(() => {
        gsap.to(row1Ref.current, {
            x: '-50%',
            repeat: -1,
            duration: 40,
            ease: 'linear'
        });

        gsap.to(row2Ref.current, {
            x: '-50%',
            repeat: -1,
            duration: 35,
            ease: 'linear'
        });
    }, []);

    const commonStyles = {
        whiteSpace: 'nowrap',
        display: 'inline-block',
        paddingRight: '4rem',
        fontWeight: 600,
        fontSize: '1.2rem',
        textShadow: `0 0 0.1rem`,
    };

    return (
        <Box sx={{ overflow: 'hidden', py: 4, my: 2, position: 'relative' }}>
            {/* Row 1 */}
            <Box sx={{ overflow: 'hidden', position: 'relative', width: '100%', height: '2.5rem' }}>
                <Box ref={row1Ref} sx={{
                    display: 'flex',
                    position: 'absolute',
                    willChange: 'transform',
                    width: 'max-content',
                }}>
                    {[...sliderTextsPart1, ...sliderTextsPart1].map((text, i) => (
                        <Typography key={i} sx={commonStyles} color="text.primary">
                            {text}
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ overflow: 'hidden', position: 'relative', width: '100%', height: '2.5rem', mt: 2 }}>
                <Box ref={row2Ref} sx={{
                    display: 'flex',
                    position: 'absolute',
                    willChange: 'transform',
                    width: 'max-content',
                }}>
                    {[...sliderTextsPart2, ...sliderTextsPart2].map((text, i) => (
                        <Typography key={i} sx={commonStyles} color="text.primary">
                            {text}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Slider;
