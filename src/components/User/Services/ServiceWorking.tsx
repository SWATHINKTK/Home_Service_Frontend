import React from 'react'

const ServiceWorking: React.FC = () => {
    const steps = [
        {
            number: 1,
            title: 'Diagnosis',
            description: 'Our partner will visit your home & diagnose the issue.'
        },
        {
            number: 2,
            title: 'Verification',
            description: "Once our partner arrives, we'll send an OTP to your phone. Share it with them to start the service."
        },
        {
            number: 3,
            title: 'Cost estimation',
            description: 'The final estimate will be provided after the diagnosis process.'
        },
        {
            number: 4,
            title: 'Post-service cleanup',
            description: 'Our partner will visit your home & diagnose the issue.',
            bottom: true
        },
    ]
    return (
        <section className='mx-auto max-w-5xl px-3 my-4'>
            <div className='md:flex w-full gap-6 font-Montserrat'>
                <article className='relative w-full'>
                    <h3 className='font-bold   tracking-wider text-[1.7rem]'>How It Works</h3>
                    <div className='mt-5 mx-7 '>
                        <ol className="relative text-gray-500 border-s-4 border-black dark:border-gray-700 dark:text-gray-400">
                            {steps.map((step, index) => (
                                <li key={index} className="mb-10 ms-9 text-black">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-black rounded-full -start-[18px] ring-4 ring-black" style={{ bottom: step.bottom ? '0.25rem' : 'auto' }}>
                                        <h2 className='font-bold text-white text-xl'>{step.number}</h2>
                                    </span>
                                    <h3 className="font-semibold text-xl leading-tight">{step.title}</h3>
                                    <p className="text-[0.8rem]">{step.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </article>
                <article className='md:border-l-2  w-full md:px-7 px-5 md:py-10 py-2'>
                    <h3 className='font-semibold text-lg'>Included</h3>
                    <ul className='included-list list-item px-3 py-2'>
                        <li>Professional and certified Workers.</li>
                        <li>Post-service cleanup</li>
                        <li>7 Days Service Warranty.</li>
                        <li>Procurement of materials at additional Cost.</li>
                        <li>Additional charge applies if helper needed.</li>
                    </ul>
                    <h3 className='font-semibold text-lg'>Excluded</h3>
                    <ul className='excluded-list list-item px-3 py-2'>
                        <li>Please Provide ladder, if required.</li>
                        <li>Warranty does not cover spare parts provided by customers.</li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default ServiceWorking
