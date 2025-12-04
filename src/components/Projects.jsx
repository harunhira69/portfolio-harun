import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, GithubLogo, Globe } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: "PawMart",
        desc: "Pet adoption and supplies platform connecting pet lovers with companions",
        stack: ["React", "Node.js", "MongoDB"],
        image: "/pawmart.png",
        github: "https://github.com/harunhira69/PawMart-client",
        backend: "https://github.com/harunhira69/PawMart-server",
        live: "https://pawmart-adf30.web.app/"
    },
    {
        id: 2,
        title: "SkillSwap",
        desc: "Skill exchange platform for learning and connecting with talented individuals",
        stack: ["React", "Firebase", "Tailwind"],
        image: "/skillswap.png",
        github: "https://github.com/harunhira69/React-skilswap",
        live: "https://react-skilswap.web.app/"
    },
    {
        id: 3,
        title: "RideZone",
        desc: "Premium sports car marketplace with advanced search and se",
        stack: ["React", "Express", "MongoDB"],
        image: "/ridezone.png",
        github: "https://github.com/harunhira69/ridezone-client",
        backend: "https://github.com/harunhira69/ridezon-backend",
        live: "https://ridezone-ui.vercel.app/"
    },



];

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Title animation
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                }
            }
        );

        // Card stagger animations
        gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="section container" style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
            background: 'var(--color-bg-secondary)'
        }}>
            {/* Section Header */}
            <div ref={titleRef} style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <span style={{
                    display: 'inline-block',
                    padding: '0.4rem 1.2rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-secondary)',
                    marginBottom: '1.5rem'
                }}>
                    💼 My Work
                </span>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: '1.1',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-display)'
                }}>
                    Selected <span className="gradient-text">Projects</span>
                </h2>
                <p style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    A showcase of my recent work, featuring web applications,
                    interactive experiences, and creative projects.
                </p>
            </div>

            {/* Projects Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2.5rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        ref={el => cardsRef.current[index] = el}
                        className="project-card glass-strong"
                        style={{
                            borderRadius: 'var(--radius-lg)',
                            padding: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            height: '100%'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 50px rgba(124, 58, 237, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Project Image */}
                        <div className="card-image" style={{
                            height: '250px',
                            backgroundColor: '#1a1a1a',
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Overlay on hover */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }}
                                className="card-overlay"
                            ></div>

                            {/* Action buttons */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                display: 'flex',
                                gap: '1rem',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }}
                                className="card-actions"
                            >
                                <a href={project.github} style={{
                                    padding: '0.8rem',
                                    borderRadius: '50%',
                                    background: 'var(--glass-bg-strong)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <GithubLogo size={24} color="white" />
                                </a>
                                <a href={project.live} style={{
                                    padding: '0.8rem',
                                    borderRadius: '50%',
                                    background: 'var(--gradient-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <Globe size={24} color="white" />
                                </a>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div style={{
                            padding: '2rem',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '1.6rem',
                                    marginBottom: '0.8rem',
                                    fontFamily: 'var(--font-display)'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem'
                                }}>
                                    {project.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                                    {project.stack.map((tech, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.4rem 0.9rem',
                                            borderRadius: 'var(--radius-full)',
                                            border: '1px solid var(--glass-border)',
                                            background: 'var(--glass-bg)',
                                            color: 'var(--color-secondary)',
                                            fontWeight: 500
                                        }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Links */}
                            <div style={{
                                display: 'flex',
                                gap: '0.75rem',
                                marginTop: '1.5rem',
                                flexWrap: 'wrap'
                            }}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: 'var(--radius-full)',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text)',
                                        fontSize: '0.85rem',
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--color-primary)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--glass-bg)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <GithubLogo size={16} weight="bold" />
                                    Client
                                </a>

                                {project.backend && (
                                    <a
                                        href={project.backend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.6rem 1.2rem',
                                            borderRadius: 'var(--radius-full)',
                                            background: 'var(--glass-bg)',
                                            border: '1px solid var(--glass-border)',
                                            color: 'var(--color-text)',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'var(--color-secondary)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'var(--glass-bg)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <GithubLogo size={16} weight="bold" />
                                        Backend
                                    </a>
                                )}

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: 'var(--radius-full)',
                                        background: 'var(--gradient-primary)',
                                        border: 'none',
                                        color: 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Globe size={16} weight="bold" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .project-card:hover .card-overlay,
                .project-card:hover .card-actions {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;

