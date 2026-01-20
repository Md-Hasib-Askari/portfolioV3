import { Globe } from 'lucide-react'
import { Button } from '../ui/button'
import { sectionStyle } from '@/app/page'

export default function HeroSection() {
    return (
        <section className={`${sectionStyle} flex-1 justify-center items-center text-center`}>
            <h1 className="text-3xl font-bold text-center mt-10">
                Software Engineer (Full Stack)
            </h1>
            <p className="max-w-3xl mx-auto text-center mt-4 text-lg text-gray-500">
                Building high-quality software that balances aesthetics, performance, and solid engineering practices, with a strong focus on creating scalable, accessible, and impactful digital experiences.
            </p>


            <div className="flex flex-row justify-center gap-5 mt-6 ">
                <Button className="flex items-center space-x-2">
                    Projects <Globe />
                </Button>

                <Button variant="outline" className="flex items-center space-x-2">
                    Find out more
                </Button>
            </div>

            <section className={`${sectionStyle} mb-10 mt-10`}>
                <span className="pl-10">Technologies I Use</span>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="p-4 border rounded-lg text-center">React</div>
                    <div className="p-4 border rounded-lg text-center">Next.js</div>
                    <div className="p-4 border rounded-lg text-center">Node.js</div>
                    <div className="p-4 border rounded-lg text-center">TypeScript</div>
                    <div className="p-4 border rounded-lg text-center">Python</div>
                    <div className="p-4 border rounded-lg text-center">Django</div>
                    <div className="p-4 border rounded-lg text-center">GraphQL</div>
                    <div className="p-4 border rounded-lg text-center">Docker</div>
                </div>
            </section>
        </section>
    )
}
