'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sectionStyle } from "@/app/page";
import { usePathname } from "next/navigation";
import { GLOBAL_PATHNAMES } from "@/constants/global-pathnames";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();

    const getActiveLinkStyle = (path: string) => {
        return pathname === path ? 'text-orange-500 cursor-pointer' : 'text-gray-400 cursor-pointer hover:text-orange-500 transition-colors';
    }

    return (
        <nav className={`${sectionStyle} flex flex-row justify-between items-center pt-7`}>
            <div>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </div>
            <div>
                <ul className="flex flex-row gap-10">
                    <li className={getActiveLinkStyle(GLOBAL_PATHNAMES.HOME)}>
                        <Link href="/#home">Home</Link>
                    </li>
                    <li className={getActiveLinkStyle(GLOBAL_PATHNAMES.ABOUT)}>
                        <Link href="/#about">About</Link>
                    </li>
                    <li className={getActiveLinkStyle(GLOBAL_PATHNAMES.PROJECTS)}>
                        <Link href="/#projects">Projects</Link>
                    </li>
                    <li className={getActiveLinkStyle(GLOBAL_PATHNAMES.TESTIMONIALS)}>
                        <Link href="/#testimonials">Testimonials</Link>
                    </li>
                    <li className={getActiveLinkStyle(GLOBAL_PATHNAMES.FAQ)}>
                        <Link href="/#faq">FAQ</Link>
                    </li>
                    <li className={getActiveLinkStyle(GLOBAL_PATHNAMES.CONTACT)}>
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="inline-flex items-center justify-center">
                <Button className="bg-background text-gray-100 hover:text-gray-700 border border-gray-700" variant="default" size="lg">
                    Get in touch via WhatsApp
                </Button>
            </div>
        </nav>
    )
}
