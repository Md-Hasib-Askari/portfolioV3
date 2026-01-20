import { sectionStyle } from "@/app/page";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import FaqItem from "../ui/faq-item";

export default function FaqSection() {
    return (
        <section className={`relative ${sectionStyle} px-6 py-20`} id="faq">
            <h2 className="mb-12 text-center text-2xl font-semibold">
                Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-2">
                <FaqItem
                    value="item-1"
                    question="How does your creative process work?"
                    answer="I start by understanding the problem and the user's needs, then move into research, wireframing, design, and finally development with continuous feedback and iteration."
                />

                <FaqItem
                    value="item-2"
                    question="Which tech stacks do you work with?"
                    answer="I primarily work with modern front-end technologies such as React, Next.js, TypeScript, Tailwind CSS, and UI libraries like shadcn. I also have experience with backend tools and APIs."
                />

                <FaqItem
                    value="item-3"
                    question="How many years of experience do you have?"
                    answer="I have over one year of hands-on experience working with front-end development, building real-world projects and continuously improving my skills."
                />

                <FaqItem
                    value="item-4"
                    question="Why did you choose UI/UX design and front-end development?"
                    answer="I enjoy transforming ideas into intuitive and visually appealing digital experiences. Front-end development allows me to combine creativity, usability, and engineering."
                />
            </Accordion>
        </section>
    );
}
