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
                    year="2026"
                    tags={[".NET", "PostgreSQL", "Docker", "JWT"]}
                    githubUrl="https://github.com/Md-Hasib-Askari/LearnSpace"
                />
                <ProjectCard
                    title="AsterSupportAgent"
                    description="An AI-powered customer support chatbot for an online clothing store, featuring an agentic tool-calling loop with LLM integration."
                    year="2026"
                    tags={[".NET", "AI/LLM", "Ollama", "REST API"]}
                    githubUrl="https://github.com/Md-Hasib-Askari/AsterSupportAgent"
                    liveUrl="https://aster-agent.vercel.app/"
                />
                <ProjectCard
                    title="Docten"
                    description="A full-stack medical practice management system for doctors to manage patients, appointments, prescriptions, and staff efficiently."
                    year="2024"
                    tags={["Next.js", "Express", "MongoDB", "TypeScript"]}
                    githubUrl="https://github.com/Md-Hasib-Askari/docten"
                />
                <ProjectCard
                    title="Foodio"
                    description="A full-stack food ordering platform with NestJS backend, Next.js frontend, user/auth, admin panel, and order processing."
                    year="2026"
                    tags={["NestJS", "Next.js", "PostgreSQL", "TypeScript"]}
                    githubUrl="https://github.com/Md-Hasib-Askari/foodio"
                />
                <ProjectCard
                    title="TenantFlow"
                    description="Multi-tenant SaaS starter kit built with .NET 10, Clean Architecture, EF Core, PostgreSQL, and Redis. Features tenant isolation, JWT auth, soft deletes, audit trails, and RLS."
                    year="2026"
                    tags={[".NET", "PostgreSQL", "Redis", "JWT", "Docker", "EF Core"]}
                    githubUrl="https://github.com/Md-Hasib-Askari/TenantFlow"
                />
            </div>
        </section>
    )
}
