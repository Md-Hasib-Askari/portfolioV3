import { sectionStyle } from '@/app/page'

export default function ContactSection() {
    return (
        <section className={`${sectionStyle} mt-10 mb-10 text-center space-y-4`}>
            <p>Ready to collaborate?</p>
            <p className='text-8xl'>GET IN TOUCH</p>
            <p>Feel free to reach out for any project inquiries or just to say hello!</p>
        </section>
    )
}
