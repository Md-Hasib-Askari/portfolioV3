import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import { sectionStyle } from '@/app/page'

export default function HighlightSection() {
    return (
        <section className={`${sectionStyle} rounded-lg`}>
            <div className="mx-4 border rounded-lg p-6 flex flex-row text-center gap-4">
                <div className="flex flex-col gap-6 justify-center items-center w-3/5 text-lg font-medium">
                    <div className="flex flex-row gap-4 w-full">
                        <div className="border w-full">+1 Years of Experience</div>
                        <div className="border w-full">+5 Projects Completed</div>
                    </div>
                    <div className="border w-full rounded-lg">+8 Certificates</div>
                </div>
                <div className="flex justify-center items-center w-2/5">
                    <AspectRatio ratio={3 / 1}>
                        <Image
                            src="/logo.svg"
                            alt="Clients"
                            // width={300}
                            // height={100}
                            fill
                        />
                    </AspectRatio>
                </div>
            </div>
        </section>
    )
}
