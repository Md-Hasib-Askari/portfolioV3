import clsx from "clsx";

export function StatCard({
    value,
    title,
    description,
    className,
}: {
    value: string;
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <div
            className={clsx(
                "relative rounded-2xl border border-gray-400/40 bg-background/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg",
                className
            )}
        >
            <div className="text-2xl font-semibold text-primary">{value}</div>
            <div className="mt-1 text-lg font-medium">{title}</div>
            <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
