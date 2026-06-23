import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
    title: string;
    description: string;
    year: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
};

const placeholders = [
    {
        bg: "bg-[#0f0f1a]",
        orb1: "radial-gradient(ellipse at 30% 50%, rgba(139, 92, 246, 0.5) 0%, transparent 60%)",
        orb2: "radial-gradient(ellipse at 75% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 55%)",
        orb3: "radial-gradient(ellipse at 55% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 50%)",
        text: "text-violet-300/80",
    },
    {
        bg: "bg-[#0a1a14]",
        orb1: "radial-gradient(ellipse at 25% 60%, rgba(16, 185, 129, 0.5) 0%, transparent 60%)",
        orb2: "radial-gradient(ellipse at 70% 35%, rgba(6, 182, 212, 0.4) 0%, transparent 55%)",
        orb3: "radial-gradient(ellipse at 50% 85%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)",
        text: "text-emerald-300/80",
    },
    {
        bg: "bg-[#1a0f0f]",
        orb1: "radial-gradient(ellipse at 35% 45%, rgba(239, 68, 68, 0.45) 0%, transparent 60%)",
        orb2: "radial-gradient(ellipse at 72% 38%, rgba(249, 115, 22, 0.4) 0%, transparent 55%)",
        orb3: "radial-gradient(ellipse at 50% 80%, rgba(234, 179, 8, 0.2) 0%, transparent 50%)",
        text: "text-rose-300/80",
    },
    {
        bg: "bg-[#0f1520]",
        orb1: "radial-gradient(ellipse at 28% 50%, rgba(14, 165, 233, 0.5) 0%, transparent 60%)",
        orb2: "radial-gradient(ellipse at 70% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 55%)",
        orb3: "radial-gradient(ellipse at 52% 82%, rgba(168, 85, 247, 0.25) 0%, transparent 50%)",
        text: "text-sky-300/80",
    },
];

function getPlaceholder(title: string) {
    return placeholders[title.charCodeAt(0) % placeholders.length];
}

export function ProjectCard({
    title,
    description,
    year,
    tags,
    githubUrl,
    liveUrl,
    image,
}: ProjectCardProps) {
    const ph = getPlaceholder(title);

    return (
        <Card className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition hover:shadow-lg">
            {image ? (
                <div className="relative aspect-video overflow-hidden rounded-xl m-2">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            ) : (
                <div className={`relative flex items-center justify-center aspect-video overflow-hidden rounded-xl m-2 ${ph.bg}`}>
                    <div className="absolute inset-0" style={{ background: ph.orb1 }} />
                    <div className="absolute inset-0" style={{ background: ph.orb2 }} />
                    <div className="absolute inset-0" style={{ background: ph.orb3 }} />
                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px' }} />
                    <span
                        className={`relative z-10 text-7xl font-black select-none tracking-tighter ${ph.text} drop-shadow-lg`}
                        style={{ textShadow: '0 0 40px currentColor' }}
                    >
                        {title.charAt(0)}
                    </span>
                </div>
            )}
            <CardContent className="flex flex-col gap-4 p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">{title}</h3>
                    <span className="text-xs text-muted-foreground">{year}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full px-3 py-1 text-xs"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    {liveUrl && (
                        <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition">
                            <ExternalLink size={16} />
                        </Link>
                    )}
                    {githubUrl && (
                        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition">
                            <Github size={14} />
                            View Code
                        </Link>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
