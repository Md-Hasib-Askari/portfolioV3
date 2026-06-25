'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { scrollToSection, sectionStyle } from "@/app/page";
import { useEffect, useState } from "react";

const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsHome(window.scrollY < 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const sectionVisibility: Record<string, number> = {};

        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    sectionVisibility[id] = entry.intersectionRatio;

                    // Pick the section with the highest visibility
                    const mostVisible = Object.entries(sectionVisibility).reduce(
                        (best, [key, ratio]) => (ratio > best.ratio ? { id: key, ratio } : best),
                        { id: 'home', ratio: 0 }
                    );

                    if (mostVisible.ratio > 0) {
                        setActiveSection(mostVisible.id);
                    }
                },
                {
                    threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
                    rootMargin: '-10% 0px -10% 0px',
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const getLinkStyle = (id: string) =>
        activeSection === id
            ? 'text-orange-500 cursor-pointer transition-colors'
            : 'text-muted-foreground cursor-pointer hover:text-orange-500 transition-colors';

    return (
        <nav
            className={`bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isHome ? 'shadow-lg' : 'backdrop-blur-sm bg-background/80'
            }`}
        >
            <div className={`${sectionStyle} flex flex-row justify-between items-center py-3 md:py-4 px-4`}>
                <div>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="md:w-12.5 md:h-12.5"
                    />
                </div>

                <div className="hidden lg:block">
                    <ul className="flex flex-row gap-6 xl:gap-10 text-sm xl:text-base">
                        {navLinks.map(({ label, id }) => (
                            <li
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={getLinkStyle(id)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="inline-flex items-center justify-center">
                    <Button
                        onClick={() => window.open("https://www.linkedin.com/in/mdhasibaskari/", "_blank")}
                        className="bg-background text-foreground hover:text-muted-foreground border border-border"
                        variant="default"
                        size="sm"
                    >
                        <span className="hidden lg:inline">Get in touch via Linkedin</span>
                        <span className="lg:hidden">Linkedin</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
