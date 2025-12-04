import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown } from '@phosphor-icons/react';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    // Typewriter animation state
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        'Frontend Developer',
        'MERN Stack Developer'
    ];

    useEffect(() => {
        const tl = gsap.timeline({ delay: 2.5 }); // Wait for preloader

        // Content animation
        tl.fromTo(contentRef.current.children,
            { opacity: 0, y: 60, filter: "blur(10px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            }
        );

        // Scroll indicator animation
        gsap.to(scrollIndicatorRef.current, {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    // Typewriter effect
    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={heroRef}
            id="hero"
            className="section"
            style={{
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Spline Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.6
            }}>
                <iframe
                    src='https://my.spline.design/orb-A8PtputA92LaBHENPvaVm9gA/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    style={{ border: 'none' }}
                ></iframe>
            </div>

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, var(--color-bg) 100%)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            {/* Content */}
            <div
                ref={contentRef}
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: '900px'
                }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-display)'
                }}>
                    <span style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: 600,
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        Hi, I'm <span className="gradient-text">Harun</span>
                    </span>
                    <span style={{
                        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                        fontWeight: 600,
                        display: 'inline-block',
                        minHeight: 'clamp(2rem, 6vw, 4.5rem)'
                    }}>
                        {text}
                        <span style={{
                            borderRight: '3px solid var(--color-primary)',
                            animation: 'blink 0.7s infinite',
                            marginLeft: '2px'
                        }}>|</span>
                    </span>
                </h1>

                <style>{`
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}</style>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '650px',
                    margin: '0 auto 2rem',
                    lineHeight: 1.8
                }}>
                    I build fast, modern, and visually engaging web applications using
                    Next.js, React, and the MERN stack. I focus on clean UI, smooth
                    interactions, and high-performance user experiences.
                </p>

                {/* Tech Stack Highlights */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '3rem'
                }}>
                    {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, i) => (
                        <span key={i} style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: 'var(--color-text)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--color-primary)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--glass-bg)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-3px)';
                            e.target.style.boxShadow = 'var(--shadow-glow-strong)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'transparent',
                            border: '2px solid var(--color-primary)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--color-primary)';
                            e.target.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                onClick={scrollToAbout}
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    Scroll Down
                </span>
                <ArrowDown size={24} color="var(--color-primary)" weight="bold" />
            </div>
        </section>
    );
};

export default Hero;
