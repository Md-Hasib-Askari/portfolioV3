'use client';

import { sectionStyle } from '@/app/page'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function TechStackSection() {
    return (
        <section className={`${sectionStyle} my-8 overflow-hidden`}>
            <span className="pl-10">Technologies I Use</span>
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
                <CarouselContent className="text-5xl text-muted-foreground/60 my-5 -ml-4 text-center flex gap-10">
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-typescript-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-react-original grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-nextjs-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-tailwindcss-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-nodejs-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-express-original grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-nestjs-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-postgresql-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-tailwindcss-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-tailwindcss-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-mongodb-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-git-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-github-original grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-docker-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-linux-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-vscode-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/9">
                        <i className="devicon-figma-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
