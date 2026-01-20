import { sectionStyle } from "@/app/page";
import { TestimonialCard } from "../ui/testimonial-card";

type Testimonial = {
    rating: number;
    quote: string;
    name: string;
    role: string;
    avatar?: string;
};

const testimonials: Testimonial[] = [
    {
        rating: 4,
        quote:
            "Migrar para a TechBank foi a melhor decisão que tomamos. Ganhamos agilidade e tranquilidade no dia a dia.",
        name: "Jorge Washington",
        role: "Front-end Developer",
        avatar: "/avatars/jorge.png",
    },
    {
        rating: 5,
        quote:
            "Nunca pensei que abrir uma conta seria tão rápido. Em menos de 5 minutos já estava com tudo funcionando.",
        name: "Mariana Silva",
        role: "Tech Lead",
        avatar: "/avatars/mariana.png",
    },
    {
        rating: 3,
        quote:
            "O app é super intuitivo e fácil de usar. Consigo pagar minhas contas, acompanhar meus gastos e ainda investir.",
        name: "Lucas Andrade",
        role: "UI/UX Designer",
        avatar: "/avatars/lucas.png",
    },
];

function TestimonialsSection() {
    return (
        <section className={`relative ${sectionStyle} px-4 sm:px-6 py-12 sm:py-24`} id="testimonials">
            <div className="mb-8 sm:mb-12 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold">Testimonials</h2>
                <p className="max-w-md text-xs sm:text-sm text-muted-foreground">
                    Feedback from clients, partners and colleagues who have experienced my
                    professional journey.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

export default TestimonialsSection;