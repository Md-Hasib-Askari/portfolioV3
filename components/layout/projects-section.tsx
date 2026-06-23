import { sectionStyle } from '@/app/page'
import { ProjectCard } from '../ui/project-card'

export default function ProjectsSection() {
    return (
        <section className={`${sectionStyle} py-10 sm:py-20 px-4`} id="projects">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <ProjectCard
                    title="LearnSpace"
                    description="An ASP.NET Core Web API for managing online courses, lessons, quizzes, and student progress with JWT auth and role-based access control."
                    image="/project-images/p1.png"
                    year="2025"
                    tags={[".NET", "PostgreSQL", "Docker", "JWT"]}
                />
                <ProjectCard
                    title="AsterSupportAgent"
                    description="An AI-powered customer support chatbot for an online clothing store, featuring an agentic tool-calling loop with LLM integration."
                    image="/project-images/p2.png"
                    year="2025"
                    tags={[".NET", "AI/LLM", "Ollama", "REST API"]}
                />
                <ProjectCard
                    title="Docten"
                    description="A full-stack medical practice management system for doctors to manage patients, appointments, prescriptions, and staff efficiently."
                    image="/project-images/p3.png"
                    year="2024"
                    tags={["Next.js", "Express", "MongoDB", "TypeScript"]}
                />
                <ProjectCard
                    title="Foodio"
                    description="A full-stack food ordering platform with NestJS backend, Next.js frontend, user/auth, admin panel, and order processing."
                    image="/project-images/p4.png"
                    year="2024"
                    tags={["NestJS", "Next.js", "PostgreSQL", "TypeScript"]}
                />
            </div>
        </section>
    )
}
