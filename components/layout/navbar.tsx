'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { scrollToSection, sectionStyle } from "@/app/page";
import { usePathname } from "next/navigation";
import { GLOBAL_PATHNAMES } from "@/constants/global-pathnames";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            if (homeSection) {
                const rect = homeSection.getBoundingClientRect();
                setIsHome(rect.bottom > 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getActiveLinkStyle = (path: string) => {
        return pathname === path ? 'text-orange-500 cursor-pointer' : 'text-gray-400 cursor-pointer hover:text-orange-500 transition-colors';
    }

    return (
        <nav
            className={`bg-transparent fixed top-0 left-0 right-0 transition-all duration-300 ${isHome
                ? 'shadow-lg'
                : 'backdrop-blur-sm bg-background/80'
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
                        <li onClick={() => scrollToSection("home")} className={getActiveLinkStyle(GLOBAL_PATHNAMES.HOME)}>
                            Home
                        </li>
                        <li onClick={() => scrollToSection("about")} className={getActiveLinkStyle(GLOBAL_PATHNAMES.ABOUT)}>
                            About
                        </li>
                        <li onClick={() => scrollToSection("projects")} className={getActiveLinkStyle(GLOBAL_PATHNAMES.PROJECTS)}>
                            Projects
                        </li>
                        <li onClick={() => scrollToSection("testimonials")} className={getActiveLinkStyle(GLOBAL_PATHNAMES.TESTIMONIALS)}>
                            Testimonials
                        </li>
                        <li onClick={() => scrollToSection("faq")} className={getActiveLinkStyle(GLOBAL_PATHNAMES.FAQ)}>
                            FAQ
                        </li>
                        <li onClick={() => scrollToSection("contact")} className={getActiveLinkStyle(GLOBAL_PATHNAMES.CONTACT)}>
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="inline-flex items-center justify-center">
                    <Button className="bg-background text-gray-100 hover:text-gray-700 border border-gray-700" variant="default" size="sm">
                        <span className="hidden lg:inline">Get in touch via WhatsApp</span>
                        <span className="lg:hidden">WhatsApp</span>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
