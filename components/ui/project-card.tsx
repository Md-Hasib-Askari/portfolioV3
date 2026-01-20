import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    year: string;
    tags: string[];
};

export function ProjectCard({
    title,
    description,
    image,
    year,
    tags,
}: ProjectCardProps) {
    return (
        <Card className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition hover:shadow-lg">
            <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                <Image
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                />
            </div>

            <CardContent className="space-y-4 p-5">
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

                <div className="flex items-center gap-3 pt-2">
                    <button className="text-muted-foreground hover:text-foreground transition">
                        <ExternalLink size={16} />
                    </button>
                    <button className="text-muted-foreground hover:text-foreground transition">
                        <Github size={16} />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
