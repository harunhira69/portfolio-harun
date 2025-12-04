import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart, GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple } from '@phosphor-icons/react';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        // Floating particles animation
        const particles = footerRef.current.querySelectorAll('.particle');
        particles.forEach((p) => {
            gsap.to(p, {
                y: gsap.utils.random(-80, -30),
                x: gsap.utils.random(-20, 20),
                duration: gsap.utils.random(3, 6),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: gsap.utils.random(0, 2)
            });
        });
    }, []);

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { Icon: GithubLogo, href: 'https://github.com/harunhira69', label: 'GitHub' },
        { Icon: LinkedinLogo, href: 'https://www.linkedin.com/in/harunmern/', label: 'LinkedIn' },
        { Icon: TwitterLogo, href: 'https://x.com/harunabhi4', label: 'Twitter' },
        { Icon: EnvelopeSimple, href: 'harunabhi4@gmail.com', label: 'Email' }
    ];

    return (
        <footer ref={footerRef} style={{
            position: 'relative',
            padding: '5rem 0 2rem',
            overflow: 'hidden',
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--color-bg-secondary)'
        }}>
            {/* Particles */}
            {[...Array(15)].map((_, i) => (
                <div key={i} className="particle" style={{
                    position: 'absolute',
                    bottom: '0',
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    backgroundColor: i % 3 === 0 ? 'var(--color-primary)' : i % 3 === 1 ? 'var(--color-secondary)' : 'var(--color-accent)',
                    borderRadius: '50%',
                    opacity: 0.4,
                    filter: 'blur(2px)'
                }}></div>
            ))}

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand Section */}
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-display)',
                            background: 'var(--gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Harun
                        </h3>
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.7',
                            marginBottom: '1.5rem'
                        }}>
                            Creative web developer crafting immersive digital experiences
                            with modern technologies and stunning design.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {socialLinks.map(({ Icon, href, label }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="glass"
                                    style={{
                                        padding: '0.7rem',
                                        borderRadius: '50%',
                                        color: 'var(--color-text)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--gradient-primary)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--glass-bg)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        style={{
                                            color: 'var(--color-text-secondary)',
                                            fontSize: '0.95rem',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1.5rem',
                            fontWeight: 600
                        }}>
                            Get In Touch
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <strong style={{ color: 'var(--color-text)' }}>Email:</strong><br />
                                harunabhi4@gmail.com
                            </li>
                            <li style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <strong style={{ color: 'var(--color-text)' }}>Location:</strong><br />
                                Available for remote work
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: 'var(--glass-border)',
                    margin: '2rem 0'
                }}></div>

                {/* Bottom Footer */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        © {currentYear} Harun. Made with
                        <Heart size={16} color="var(--color-accent)" weight="fill" />
                        and React
                    </p>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.85rem'
                    }}>
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

