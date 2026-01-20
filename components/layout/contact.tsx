import { sectionStyle } from '@/app/page'

export default function ContactSection() {
    return (
        <section className={`${sectionStyle} mt-10 mb-10 text-center space-y-4`} id="contact">
            <p>Ready to collaborate?</p>
            <p className='text-8xl text-orange-500 font-semibold'>GET IN TOUCH</p>
            <p className='text-gray-700'>Feel free to reach out for any project inquiries or just to say hello!</p>
        </section>
    )
}
