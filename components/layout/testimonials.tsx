import { sectionStyle } from '@/app/page'
import React from 'react'

export default function Testimonials() {
    return (
        <section className={`${sectionStyle} mt-10 mb-10`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
            <div className="flex flex-row gap-6">
                <div className="border rounded-lg p-4">
                    <p className="text-gray-600">"This is a testimonial from a satisfied client."</p>
                    <span className="font-semibold mt-2 block">- Client Name</span>
                </div>
                <div className="border rounded-lg p-4">
                    <p className="text-gray-600">"Another testimonial highlighting the great work done."</p>
                    <span className="font-semibold mt-2 block">- Another Client</span>
                </div>
                <div className="border rounded-lg p-4">
                    <p className="text-gray-600">"Another testimonial highlighting the great work done."</p>
                    <span className="font-semibold mt-2 block">- Another Client</span>
                </div>
            </div>
        </section>
    )
}
