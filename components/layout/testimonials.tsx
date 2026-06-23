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
            "Hasib is one of the most dedicated engineers I've worked with. He picked up our stack quickly and delivered clean, well-structured code from day one.",
        name: "Team Lead",
        role: "Deepchain Labs",
    },
    {
        rating: 5,
        quote:
            "He built our CRM communication modules integrating multiple APIs with minimal guidance. Reliable, fast, and always open to feedback.",
        name: "Engineering Manager",
        role: "TS4U",
    },
    {
        rating: 3,
        quote:
            "A sharp developer with a great eye for UI detail. Hasib consistently goes beyond the brief and thinks about the end user.",
        name: "Colleague",
        role: "Full Stack Engineer",
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
