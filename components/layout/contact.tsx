import { sectionStyle } from '@/app/page'

export default function ContactSection() {
    return (
        <section className={`${sectionStyle} mt-8 sm:mt-10 mb-8 sm:mb-10 text-center space-y-3 sm:space-y-4 px-4`} id="contact">
            <p className="text-sm sm:text-base">Ready to collaborate?</p>
            <p className='text-4xl sm:text-6xl lg:text-8xl text-orange-500 font-semibold'>GET IN TOUCH</p>
            <p className='text-gray-700 text-sm sm:text-base'>Feel free to reach out for any project inquiries or just to say hello!</p>
        </section>
    )
}
