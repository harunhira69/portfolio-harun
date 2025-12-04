import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, PaintBrush, Atom, Globe, Cpu, Lightning, Rocket, Sparkle } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        // Simplified animations for better performance
        gsap.fromTo(imageRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(contentRef.current.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(skillsRef.current.children,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    const skills = [
        { Icon: Code, label: 'HTML/CSS', color: 'var(--color-primary)' },
        { Icon: Atom, label: 'React', color: 'var(--color-secondary)' },
        { Icon: Lightning, label: 'JavaScript', color: 'var(--color-accent)' },
        { Icon: Cpu, label: 'Node.js', color: 'var(--color-warning)' },
        { Icon: Rocket, label: 'Next.js', color: 'var(--color-secondary)' },
        { Icon: Globe, label: 'MongoDB', color: 'var(--color-success)' },
        { Icon: PaintBrush, label: 'Express', color: 'var(--color-primary)' },
        { Icon: Sparkle, label: 'Tailwind', color: 'var(--color-accent)' }
    ];

    return (
        <section ref={sectionRef} id="about" className="section container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
        }}>
            {/* Left: Profile Image */}
            <div ref={imageRef} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="profile-frame" style={{
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    border: '3px solid var(--color-primary)',
                    boxShadow: 'var(--shadow-glow)',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px) rotate(3deg)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow-strong)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) rotate(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                    }}
                >
                    <img src="/profile.png" alt="Harun" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    {/* Overlay gradient */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        pointerEvents: 'none'
                    }}></div>
                </div>
            </div>

            {/* Right: Bio & Skills */}
            <div ref={contentRef}>
                <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.2rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-secondary)',
                        marginBottom: '1rem'
                    }}>
                        👨‍💻 About Me
                    </span>
                </div>

                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-display)'
                }}>
                    Crafting Digital <span className="gradient-text">Experiences</span>
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem',
                    color: 'var(--color-text-secondary)'
                }}>
                    "I'm a dedicated web developer focused on creating engaging and seamless digital experiences. Leveraging modern frameworks and advanced animation techniques, I turn innovative ideas into high-performance, visually captivating web solutions."

                </p>

                <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    marginBottom: '2.5rem',
                    color: 'var(--color-text-secondary)'
                }}>
                    Every project is an opportunity to push boundaries and create something extraordinary.
                    I focus on performance, accessibility, and user experience to deliver exceptional results.
                </p>

                {/* Skills Grid */}
                <div>
                    <h3 style={{
                        fontSize: '1.3rem',
                        marginBottom: '1.5rem',
                        fontWeight: 600
                    }}>
                        Technologies & Tools
                    </h3>
                    <div ref={skillsRef} className="skills-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {skills.map(({ Icon, label, color }, index) => (
                            <div
                                key={index}
                                className="glass"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    padding: '1.5rem 1rem',
                                    borderRadius: 'var(--radius-md)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.background = 'var(--glass-bg-strong)';
                                    e.currentTarget.style.boxShadow = `0 10px 30px ${color}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.background = 'var(--glass-bg)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Icon size={40} color={color} weight="duotone" />
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text)'
                                }}>
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

