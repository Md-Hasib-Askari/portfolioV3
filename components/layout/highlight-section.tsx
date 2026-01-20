import Image from 'next/image'
import { StatCard } from '../ui/stat-card'
import { sectionStyle } from '@/app/page'
import { ArrowUpRight } from 'lucide-react'

export default function HighlightSection() {
    return (
        <section className={`relative ${sectionStyle} px-4 sm:px-6 py-10 sm:py-15`} id="about">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.15),transparent_70%)] blur-3xl" />

            <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>
                <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-orange-500">Md Hasib Askari</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl">
                        A passionate Full Stack Software Engineer dedicated to crafting elegant solutions to complex problems.
                        I specialize in building modern web applications with clean code, intuitive interfaces, and robust architectures.
                        My journey in software development is driven by curiosity, continuous learning, and a commitment to delivering
                        exceptional digital experiences.
                    </p>
                </div>
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.2fr_1fr] border border-orange-600/20 rounded-xl p-3 sm:p-5">
                <div className="grid gap-4 sm:gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <StatCard
                            value="+1 Years"
                            title="Experience"
                            description="1 year of experience in front-end development, creating interfaces"
                        />
                        <StatCard
                            value="+110"
                            title="Projects"
                            description="+110 projects developed for professional improvement"
                        />
                    </div>

                    <StatCard
                        value="+20"
                        title="Certifications"
                        description="+20 certifications proving my experience and dedication to my career and future!"
                        className="h-full"
                    />
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-border/40 min-h-[300px] sm:min-h-[400px] lg:min-h-0">
                    <Image
                        src="/profile.jpg"
                        alt="Profile"
                        className="h-full w-full object-cover grayscale"
                        fill
                    />

                    <button className="absolute right-4 top-4 rounded-full bg-orange-500 p-3 text-primary-foreground shadow-lg">
                        <ArrowUpRight className='text-white' />
                    </button>
                </div>
            </div>
        </section>

    )
}
