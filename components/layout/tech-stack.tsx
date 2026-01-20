'use client';

import { sectionStyle } from '@/app/page'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function TechStackSection() {
    return (
        <section className={`${sectionStyle} my-6 sm:my-8 overflow-hidden px-4`}>
            <span className="pl-4 sm:pl-10 text-sm sm:text-base">Technologies I Use</span>
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
                <CarouselContent className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground/60 my-3 sm:my-5 -ml-2 sm:-ml-4 text-center flex gap-4 sm:gap-10">
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-typescript-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-react-original grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-nextjs-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-tailwindcss-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-nodejs-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-express-original grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
                        <i className="devicon-nestjs-plain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition" />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 sm:basis-1/6 lg:basis-1/9">
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
