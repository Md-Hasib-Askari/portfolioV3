import Image from "next/image";
import { Button } from "@/components/ui/button";
import { sectionStyle } from "@/app/page";

export default function Navbar() {
    return (
        <nav className={`${sectionStyle} flex flex-row justify-between items-center py-4`}>
            <div>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={50}
                />
            </div>
            <div>
                <ul className="flex flex-row gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <Button variant="outline" size="lg">
                    Get in touch via WhatsApp
                </Button>
            </div>
        </nav>
    )
}
