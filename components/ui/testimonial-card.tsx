import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardContent } from "./card";

export function TestimonialCard({
    rating,
    quote,
    name,
    role,
    avatar,
}: {
    rating: number;
    quote: string;
    name: string;
    role: string;
    avatar?: string;
}) {
    return (
        <Card className="relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition hover:shadow-lg">
            <CardContent className="space-y-5 p-6">
                {/* Stars */}
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={
                                i < rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground"
                            }
                        />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                    “{quote}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="text-sm">
                        <div className="font-medium">{name}</div>
                        <div className="text-xs text-muted-foreground">{role}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
