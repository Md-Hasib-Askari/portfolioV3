import { sectionStyle } from '@/app/page'
import { ProjectCard } from '../ui/project-card'

export default function ProjectsSection() {
    return (
        <section className={`${sectionStyle} py-10 sm:py-20 px-4`} id="projects">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <ProjectCard
                    title="Project 1"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor."
                    image="/project-images/p1.png"
                    year="2025"
                    tags={["Figma", "Web development", "Mobile App"]}
                />
                <ProjectCard
                    title="Project 2"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor."
                    image="/project-images/p2.png"
                    year="2024"
                    tags={["UI/UX", "Design"]}
                />
                <ProjectCard
                    title="Project 3"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor."
                    image="/project-images/p3.png"
                    year="2023"
                    tags={["React", "Next.js", "TypeScript"]}
                />
                <ProjectCard
                    title="Project 4"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor."
                    image="/project-images/p4.png"
                    year="2024"
                    tags={["Node.js", "Express", "MongoDB"]}
                />
            </div>
        </section>
    )
}
