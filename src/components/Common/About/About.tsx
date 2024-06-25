import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../../User/Footer/Footer'
import Navbar from '../Navbar/Navbar'

interface IAboutPageProb {
    user: boolean
}

const About: React.FC<IAboutPageProb> = ({ user }) => {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar user={user} special={false} />
            <div className='py-28 max-w-6xl mx-auto font-Montserrat'>
                <div className='flex py-3'>
                    <div className='w-6/12 flex justify-center items-end'>
                        <div className='w-[90%] h-[90%] rounded-lg drop-shadow-2xl' style={{ backgroundImage: "url('/public/about.jpg')", backgroundSize: 'cover' }}>
                        </div>
                    </div>
                    <div className='w-6/12 flex flex-col  justify-center items-center'>
                        <h1 className='text-4xl font-bold'>About Us</h1>
                        <p className='text-gray-600 leading-relaxed tracking-wide my-5 text-justify'>Welcome to Heaven Crew, your premier choice for expert home services. At Heaven Crew, we pride ourselves on delivering top-notch solutions for all your household needs. Our skilled team offers a diverse range of services including plumbing, electrical work, carpentry, painting, appliance repair, and cleaning, ensuring every job is completed to perfection. We prioritize professionalism and customer satisfaction, guaranteeing transparent communication and reliable service from start to finish. Whether you need routine maintenance or have a specific project in mind, Heaven Crew is here to provide dependable and high-quality service that exceeds your expectations. Trust Heaven Crew for all your home service needs and experience the difference.</p>
                    </div>
                </div>
                <div className='flex pt-28'>
                    <div className='w-6/12 flex flex-col  justify-center items-center'>
                        <h1 className='text-3xl font-semibold'>Why Choose Us ?</h1>
                        <p className='text-gray-600 leading-relaxed tracking-wide my-5 text-justify'>Why choose Heaven Crew for your home service needs? At Heaven Crew, we stand out for our unwavering commitment to excellence and customer satisfaction. With a team of highly skilled professionals specializing in plumbing, electrical work, carpentry, painting, appliance repair, and cleaning, we ensure that every job is completed to the highest standards. Our dedication to quality craftsmanship means you can trust us with any project, big or small. We prioritize clear communication, transparency in pricing, and a hassle-free experience, making it easy for you to manage and schedule services through our user-friendly platform. Whether you're looking for routine maintenance or require urgent repairs, Heaven Crew is here to provide reliable, efficient, and personalized service tailored to your home's unique needs. Choose Heaven Crew and discover why we're the preferred choice for homeowners seeking exceptional home services.</p>
                    </div>
                    <div className='w-6/12 flex justify-center items-end'>
                        <div className='w-[90%] h-[90%] rounded-lg drop-shadow-2xl' style={{ backgroundImage: "url('/public/about-worker.jpg')", backgroundSize: 'cover' }}>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
