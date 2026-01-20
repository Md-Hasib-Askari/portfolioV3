import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

function FaqItem({
    value,
    question,
    answer,
}: {
    value: string;
    question: string;
    answer: string;
}) {
    return (
        <AccordionItem
            value={value}
            className="border-b border-gray-400/40"
        >
            <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                {question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}

export default FaqItem;