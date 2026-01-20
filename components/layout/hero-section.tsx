'use client';

import { Globe } from 'lucide-react'
import { Button } from '../ui/button'
import { scrollToSection, sectionStyle } from '@/app/page'

export default function HeroSection({ className }: { className?: string }) {
    return (
        <section className={`${sectionStyle} justify-center items-center text-center px-4 ${className}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-foreground to-orange-500/90 bg-clip-text text-transparent">
                Software Engineer (Full Stack)
            </h1>

            <p className="max-w-5xl mx-auto text-center mt-4 text-sm sm:text-base lg:text-lg text-gray-500 px-4">
                Building high-quality software that balances aesthetics, performance, and solid engineering practices, with a strong focus on creating scalable, accessible, and impactful digital experiences.
            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-6 px-4">
                <Button onClick={() => scrollToSection("projects")} size="default" className="p-2 px-3 rounded-lg flex justify-center gap-2 items-center space-x-2 bg-linear-to-r from-orange-700 to-orange-700/80 text-white hover:animate-pulse text-sm sm:text-base">
                    Projects{' '}<Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                <Button variant="default" size='default' className="bg-background text-gray-100 hover:text-gray-700 border border-gray-700 flex items-center space-x-2 text-sm sm:text-base">
                    Find out more
                </Button>
            </div>
        </section>
    )
}
