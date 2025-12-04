import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

import {
    GithubLogo,
    LinkedinLogo,
    TwitterLogo,
    EnvelopeSimple,
    PaperPlaneRight
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const titleRef = useRef(null);

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(titleRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
        )
        .fromTo(formRef.current.children,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.12 },
            "-=0.3"
        );
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            "service_wno7rbj",      // ← paste here
            "YOUR_TEMPLATE_ID",     // ← paste here
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            "tYyyHBGTF8nnv2TuE"       // ← paste here
        )
        .then(() => {
            alert("Message sent successfully! I will reply soon.");
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitting(false);
        })
        .catch((error) => {
            console.error("Email error:", error);
            alert("Failed to send message! Try again.");
            setIsSubmitting(false);
        });
    };

    const socialLinks = [
        { Icon: GithubLogo, href: "https://github.com/harunhira69", label: "GitHub" },
        { Icon: LinkedinLogo, href: "https://www.linkedin.com/in/harunmern/", label: "LinkedIn" },
        { Icon: TwitterLogo, href: "https://x.com/harunabhi4", label: "Twitter" },
        { Icon: EnvelopeSimple, href: "mailto:harunabhi4@gmail.com", label: "Email" }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="section container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "4rem 0"
            }}
        >
            {/* Title Section */}
            <div ref={titleRef} style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "700px" }}>
                <span
                    style={{
                        display: "inline-block",
                        padding: "0.4rem 1.2rem",
                        borderRadius: "var(--radius-full)",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--color-secondary)",
                        fontSize: ".85rem",
                        fontWeight: 600,
                        marginBottom: "1.5rem"
                    }}
                >
                    📬 Contact
                </span>

                <h2
                    style={{
                        fontSize: "clamp(2.5rem, 5vw, 3.4rem)",
                        marginBottom: "1rem",
                        fontFamily: "var(--font-display)"
                    }}
                >
                    Let's <span className="gradient-text">Connect</span>
                </h2>

                <p
                    style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "1.1rem",
                        lineHeight: 1.7
                    }}
                >
                    Have an idea, a project, or just want to talk?  
                    Send me a message — I’d love to hear from you.
                </p>
            </div>

            {/* Form */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                    width: "100%",
                    maxWidth: "650px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem"
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass"
                    style={{
                        width: "100%",
                        padding: "1.2rem 1.5rem",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all .3s"
                    }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass"
                    style={{
                        width: "100%",
                        padding: "1.2rem 1.5rem",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all .3s"
                    }}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="glass"
                    style={{
                        width: "100%",
                        padding: "1.2rem 1.5rem",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1rem",
                        resize: "vertical",
                        outline: "none",
                        transition: "all .3s"
                    }}
                ></textarea>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        padding: "1.2rem 3rem",
                        background: isSubmitting ? "#888" : "var(--gradient-primary)",
                        borderRadius: "var(--radius-full)",
                        color: "white",
                        border: "none",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: ".7rem",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.7 : 1,
                        transition: ".3s",
                    }}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <PaperPlaneRight size={22} weight="bold" />}
                </button>
            </form>

            {/* Social Section */}
            <div style={{ marginTop: "4rem" }}>
                <p
                    style={{
                        textAlign: "center",
                        color: "var(--color-text-secondary)",
                        marginBottom: "1rem"
                    }}
                >
                    Or reach out on:
                </p>

                <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
                    {socialLinks.map(({ Icon, href, label }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="glass"
                            style={{
                                padding: "1rem",
                                borderRadius: "50%",
                                display: "flex",
                                transition: ".3s"
                            }}
                        >
                            <Icon size={28} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
