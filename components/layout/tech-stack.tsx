'use client';

import { sectionStyle } from '@/app/page'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const techs = [
    { icon: 'devicon-typescript-plain', label: 'TypeScript' },
    { icon: 'devicon-react-original', label: 'React' },
    { icon: 'devicon-nextjs-plain', label: 'Next.js' },
    { icon: 'devicon-tailwindcss-plain', label: 'Tailwind' },
    { icon: 'devicon-nodejs-plain', label: 'Node.js' },
    { icon: 'devicon-express-original', label: 'Express' },
    { icon: 'devicon-nestjs-plain', label: 'NestJS' },
    { icon: 'devicon-dot-net-plain', label: '.NET' },
    { icon: 'devicon-csharp-plain', label: 'C#' },
    { icon: 'devicon-postgresql-plain', label: 'PostgreSQL' },
    { icon: 'devicon-mongodb-plain', label: 'MongoDB' },
    { icon: 'devicon-docker-plain', label: 'Docker' },
    { icon: 'devicon-git-plain', label: 'Git' },
    { icon: 'devicon-github-original', label: 'GitHub' },
    { icon: 'devicon-linux-plain', label: 'Linux' },
    { icon: 'devicon-figma-plain', label: 'Figma' },
    { icon: 'devicon-vscode-plain', label: 'VS Code' },
];

export default function TechStackSection() {
    return (
        <section className={`${sectionStyle} my-6 sm:my-8 overflow-hidden px-4`}>
            <span className="pl-4 sm:pl-10 text-sm sm:text-base text-muted-foreground">Technologies I Use</span>
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        active: true,
                    })
                ]}
                className="w-full"
            >
                <CarouselContent className="text-3xl sm:text-4xl lg:text-5xl my-3 sm:my-5 -ml-2 sm:-ml-4">
                    {techs.map((tech) => (
                        <CarouselItem key={tech.label} className="basis-1/4 sm:basis-1/6 lg:basis-1/9 flex flex-col items-center gap-1">
                            <i className={`${tech.icon} text-muted-foreground/60 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition`} />
                            <span className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition hidden sm:block">{tech.label}</span>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
