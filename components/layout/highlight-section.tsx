import Image from 'next/image'
import { StatCard } from '../ui/stat-card'
import { sectionStyle } from '@/app/page'
import { ArrowUpRight, Circle } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function HighlightSection() {
    return (
        <section className={`relative ${sectionStyle} px-4 sm:px-6 py-10 sm:py-20`} id="about">
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

                <div className="relative overflow-hidden rounded-2xl border border-border/40 min-h-75 sm:min-h-100 lg:min-h-0">
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

            <div className="mt-8 sm:mt-12 border border-orange-600/20 rounded-xl p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-500">Work Experience</h3>

                <div className="space-y-6">
                    <div className="border-l-2 border-orange-500 pl-4 pb-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold">Full Stack Software Engineer - Intern</h4>
                                <p className="text-sm text-orange-500">Deepchain Labs</p>
                            </div>
                            <span className="text-xs sm:text-sm text-muted-foreground">Jan 2026 - Present</span>
                        </div>
                        <ul className="space-y-2 mt-3 text-xs sm:text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Circle size={6} className="fill-orange-500 text-orange-500" />
                                <span>Developed and maintained scalable web applications using React, Next.js, and Node.js</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Circle size={6} className="fill-orange-500 text-orange-500" />
                                <span>Collaborated with cross-functional teams to deliver high-quality software solutions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Circle size={6} className="fill-orange-500 text-orange-500" />
                                <span>Implemented responsive UI designs and optimized application performance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">React</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Nest.js</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Next.js</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">TypeScript</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">PostgreSQL</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Tailwind CSS</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Shadcn/UI</Badge>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-orange-500/60 pl-4 pb-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold">Software Engineer Intern</h4>
                                <p className="text-sm text-orange-500">TS4U - Dhaka, Bangladesh</p>
                            </div>
                            <span className="text-xs sm:text-sm text-muted-foreground">Aug 2024 - Jan 2025</span>
                        </div>
                        <ul className="space-y-2 mt-3 text-xs sm:text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Circle size={6} className="fill-orange-500 text-orange-500" />
                                <span>Built CRM communication modules integrating <strong>Facebook, RingCentral, and LinkedIn APIs</strong>, consolidating multi-channel messaging into a <strong>unified workflow</strong>.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Circle size={6} className="fill-orange-500 text-orange-500" />
                                <span>Optimized <strong>RESTful APIs and MongoDB schemas</strong>, improving query performance and reducing latency.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Circle size={6} className="fill-orange-500 text-orange-500" />
                                <span>Built CRM automation (workflows, autodialer, lead scoring) reducing manual effort by ~40%.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">React</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Express.js</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Next.js</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">JavaScript</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">MongoDB</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Tailwind CSS</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Antd UI Library</Badge>
                                    <Badge variant="outline" className="text-xs sm:text-sm bg-orange-500/10 text-orange-500 rounded-md">Docker</Badge>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="mt-8 sm:mt-12 border border-orange-600/20 rounded-xl p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-orange-500">Education & Achievements</h3>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Education</h4>
                        <div className="space-y-4">
                            <div className="border-l-2 border-orange-500 pl-4">
                                <h5 className="font-semibold text-base sm:text-lg">Bachelor of Science in Computer Science &amp; Engineering</h5>
                                <p className="text-sm text-muted-foreground">American International University-Bangladesh | 2022 - 2026</p>
                                <p className="text-sm text-muted-foreground mt-1">CGPA: 3.99/4.0</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Achievements</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
                                <Circle size={10} className="fill-orange-500 text-orange-500" />
                                <div>
                                    <p className="font-medium text-sm sm:text-base">Dean's List Recipient</p>
                                    <p className="text-xs sm:text-sm text-muted-foreground">Maintained academic excellence throughout degree</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
