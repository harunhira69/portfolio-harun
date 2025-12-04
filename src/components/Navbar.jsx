import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { List, X } from '@phosphor-icons/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Animate navbar on mount
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 2.8, ease: 'power3.out' }
        );
    }, []);

    useEffect(() => {
        // Mobile menu animation
        if (isMobileMenuOpen && mobileMenuRef.current) {
            gsap.fromTo(mobileMenuRef.current,
                { x: '100%', opacity: 0 },
                { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
            );
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                ref={navRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '1.5rem 0',
                    transition: 'all 0.3s ease',
                    background: isScrolled ? 'var(--glass-bg-strong)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(var(--glass-blur))' : 'none',
                    borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
                }}
            >
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Logo */}
                    <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Harun
                    </a>

                    {/* Desktop Nav Links */}
                    <ul style={{
                        display: 'flex',
                        gap: '2.5rem',
                        alignItems: 'center'
                    }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    style={{
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: 'var(--color-text)',
                                        position: 'relative',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--color-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = 'var(--color-text)';
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => handleLinkClick(e, '#contact')}
                                style={{
                                    padding: '0.6rem 1.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    background: 'var(--gradient-primary)',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
                                    display: 'inline-block'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = 'var(--shadow-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                Let's Talk
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '0.5rem'
                        }}
                        className="mobile-menu-btn"
                    >
                        <List size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '100%',
                        maxWidth: '300px',
                        height: '100vh',
                        background: 'var(--color-bg)',
                        zIndex: 2000,
                        padding: '2rem',
                        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={28} />
                    </button>

                    <ul style={{
                        marginTop: '4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 600,
                                        color: 'var(--color-text)',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        background: 'rgba(0, 0, 0, 0.7)',
                        zIndex: 1999
                    }}
                />
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
