import { sectionStyle } from '@/app/page'
import { Badge } from '../ui/badge'
import { Server, Database, Code2, Monitor, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'C#', '.NET Core', 'ASP.NET Web API', 'Node.js', 'NestJS', 'Express.js',
      'RESTful API Design', 'WebSockets', 'JWT / RBAC', 'System Design',
      'Clean Architecture', 'MVC', 'API Rate Limiting', 'Redis', 'Background Jobs',
      'Real-Time Systems', 'Postman',
    ],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      'React', 'Next.js', 'Redux', 'Zustand',
      'Tailwind CSS', 'Radix UI', 'ShadCN',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      'PostgreSQL', 'MS SQL Server', 'MySQL', 'MongoDB',
      'Schema Design', 'Indexing', 'Query Optimization',
    ],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C#', 'TypeScript', 'JavaScript', 'Python'],
  },
  {
    title: 'DevOps & Tools',
    icon: Settings,
    skills: [
      'Docker', 'Azure', 'DigitalOcean', 'Git', 'GitHub',
      'CI/CD', 'Claude Code', 'Opencode', 'Ollama',
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className={`${sectionStyle} px-4 sm:px-6 py-10 sm:py-20`} id="skills">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Skills</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
          A comprehensive overview of my technical toolkit across backend, frontend, databases, languages, and DevOps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <div
              key={category.title}
              className="border border-orange-500/20 rounded-xl p-4 sm:p-5 bg-card/40 hover:border-orange-500/40 transition-colors flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500 shrink-0">
                  <Icon size={18} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
