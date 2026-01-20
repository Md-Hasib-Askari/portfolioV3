import { sectionStyle } from '@/app/page'
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'

export default function ProjectsSection() {
    return (
        <section className={`${sectionStyle} mt-10 mb-10`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                    <AspectRatio ratio={16 / 9}>
                        <Image alt='Project One' src='/project1.png' fill />
                    </AspectRatio>
                    <h3 className="text-xl font-semibold mb-2">Project One</h3>
                    <p className="text-gray-600">A brief description of Project One.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <AspectRatio ratio={16 / 9}>
                        <Image alt='Project Two' src='/project2.png' fill />
                    </AspectRatio>
                    <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                    <p className="text-gray-600">A brief description of Project Two.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <AspectRatio ratio={16 / 9}>
                        <Image alt='Project Three' src='/project3.png' fill />
                    </AspectRatio>
                    <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                    <p className="text-gray-600">A brief description of Project Three.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <AspectRatio ratio={16 / 9}>
                        <Image alt='Project Three' src='/project3.png' fill />
                    </AspectRatio>
                    <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                    <p className="text-gray-600">A brief description of Project Three.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <AspectRatio ratio={16 / 9}>
                        <Image alt='Project Three' src='/project3.png' fill />
                    </AspectRatio>
                    <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                    <p className="text-gray-600">A brief description of Project Three.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <AspectRatio ratio={16 / 9}>
                        <Image alt='Project Three' src='/project3.png' fill />
                    </AspectRatio>
                    <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                    <p className="text-gray-600">A brief description of Project Three.</p>
                </div>
            </div>
        </section>
    )
}
