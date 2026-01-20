import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto text-center my-10">
            <span className='text-gray-400'>
                &copy; {new Date().getFullYear()} Md Hasib Askari. All rights reserved.
            </span>
            <br />
            <span className="mx-2 text-gray-400">
                Developed with ❤️ using Next.js and Tailwind CSS.
            </span>
        </footer>
    )
}
