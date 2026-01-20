import { Globe } from 'lucide-react'
import { Button } from '../ui/button'
import { sectionStyle } from '@/app/page'

export default function HeroSection({ className }: { className?: string }) {
    return (
        <section className={`${sectionStyle} justify-center items-center text-center ${className}`}>
            <h1 className="text-6xl font-bold bg-linear-to-r from-foreground to-orange-500/90 bg-clip-text text-transparent">
                Software Engineer (Full Stack)
            </h1>

            <p className="max-w-5xl mx-auto text-center mt-4 text-lg text-gray-500">
                Building high-quality software that balances aesthetics, performance, and solid engineering practices, with a strong focus on creating scalable, accessible, and impactful digital experiences.
            </p>


            <div className="flex flex-row justify-center gap-5 mt-6 ">
                <Button size='lg' className="flex items-center space-x-2 bg-linear-to-r from-orange-700 to-orange-700/80 text-white hover:animate-pulse">
                    Projects <Globe />
                </Button>

                <Button variant="default" size='lg' className="bg-background text-gray-100 hover:text-gray-700 border border-gray-700 flex items-center space-x-2">
                    Find out more
                </Button>
            </div>
        </section>
    )
}
