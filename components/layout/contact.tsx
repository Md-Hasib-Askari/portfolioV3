import { sectionStyle } from '@/app/page'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className={`${sectionStyle} mt-8 sm:mt-10 mb-8 sm:mb-10 text-center space-y-3 sm:space-y-4 px-4`} id="contact">
            <p className="text-sm sm:text-base">Ready to collaborate?</p>
            <p className='text-4xl sm:text-6xl lg:text-8xl text-orange-500 font-semibold'>GET IN TOUCH</p>
            <p className='text-gray-700 text-sm sm:text-base'>Feel free to reach out for any project inquiries or just to say hello!</p>

            <div className="mb-6">
                <ul className="flex flex-row gap-4 justify-center items-center">
                    <li>
                        <Link href="https://www.linkedin.com/in/mdhasibaskari/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-200 mt-2">
                            <Linkedin className="size-8" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.github.com/Md-Hasib-Askari/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-200 mt-2">
                            <Github className="size-8" />
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:rnadoha@gmail.com" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-200 mt-2">
                            <i className="devicon-google-plain text-3xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
