import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
    const preloaderRef = useRef(null);
    const progressBarRef = useRef(null);
    const textRef = useRef(null);
    const percentRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate progress bar and counter
        tl.to({}, {
            duration: 2,
            onUpdate: function () {
                const prog = Math.round(this.progress() * 100);
                setProgress(prog);
            }
        });

        tl.to(progressBarRef.current, {
            width: "100%",
            duration: 2,
            ease: "power2.out",
        }, 0)
            .to(textRef.current, {
                opacity: 0,
                y: -30,
                duration: 0.5,
            })
            .to(percentRef.current, {
                opacity: 0,
                duration: 0.3,
            }, "-=0.3")
            .to(preloaderRef.current, {
                opacity: 0,
                scale: 1.1,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    if (preloaderRef.current) {
                        preloaderRef.current.style.display = "none";
                    }
                }
            });
    }, []);

    return (
        <div ref={preloaderRef} className="preloader" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'var(--gradient-dark)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--color-text)'
        }}>
            {/* Background glow effect */}
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'var(--gradient-glow)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                opacity: 0.5
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h1 ref={textRef} style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Harun
                </h1>

                {/* Progress container */}
                <div style={{
                    width: '300px',
                    marginBottom: '1.5rem'
                }}>
                    <div className="progress-container glass" style={{
                        width: '100%',
                        height: '4px',
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <div ref={progressBarRef} className="progress-bar" style={{
                            width: '0%',
                            height: '100%',
                            background: 'var(--gradient-primary)',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: 'var(--shadow-glow)'
                        }}></div>
                    </div>
                </div>

                {/* Percentage */}
                <p ref={percentRef} style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-main)'
                }}>
                    {progress}%
                </p>
            </div>
        </div>
    );
};

export default Preloader;

