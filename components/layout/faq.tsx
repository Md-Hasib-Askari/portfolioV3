import { sectionStyle } from '@/app/page'

export default function FaqSection() {
    return (
        <section className={`${sectionStyle} mt-10 mb-10`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto flex flex-col gap-6">
                <div className="border rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">What technologies do you specialize in?</h3>
                    <p className="text-gray-600">I specialize in React, Next.js, Node.js, and Python among other technologies.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">How can I contact you for a project?</h3>
                    <p className="text-gray-600">You can reach out to me via the contact form on my website or email me directly.</p>
                </div>
                <div className="border rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Do you offer freelance services?</h3>
                    <p className="text-gray-600">Yes, I am available for freelance projects. Please get in touch to discuss your requirements.</p>
                </div>
            </div>
        </section>
    )
}
