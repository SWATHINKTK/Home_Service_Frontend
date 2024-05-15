import React from 'react';

const ServiceDetails: React.FC = () => {
    return (
        <>
            <div className='relative p-4 '>
                <div className='md:block hidden max-w-5xl mx-auto  min-h-[18rem] h-auto rounded-lg z-10' style={{ backgroundImage: "url('/public/AC-Repair.jpg')", backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPositionY: 'center' }}> </div>
                <div className='md:hidden block mx-auto h-36'> {/* Set the height of the div */}
                    <img className='mx-auto rounded-lg object-cover h-full w-full' src="/public/AC-Repair.jpg" alt="" /> {/* Ensure the image covers the div */}
                </div>
                <svg className="absolute  right-full transform -z-10 md:-translate-y-3/4 -translate-y-3/4 translate-x-full lg:translate-x-full text-gray-200 h-32" fill="none" height="320" viewBox="0 0 100% 320" width="100vw"><defs><pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" height="20" patternUnits="userSpaceOnUse" width="20" x="0" y="0"><rect className="text-accent-color-100" fill="currentColor" height="4" width="4" x="0" y="0"></rect></pattern></defs><rect fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" height="520" width="100vw"></rect></svg>
            </div>

            <div className='max-w-6xl mx-auto mb-10 pt-5 px-4 '>
                <div className='mt-4 '>
                    <h1 className='font-Montserrat font-bold tracking-wide md:text-[2rem] text-2xl '>Air Conditioner Service</h1>
                    <div className='my-3'>
                        <p className=' font-Montserrat md:text-[0.9rem] leading-5 text-xs text-[#727272]'>Seamlessly navigate through our services and effortlessly book with our user-friendly platform, ensuring a stress-free experience from start to finish.Kindly familiarize yourself with our terms and conditions to ensure a seamless service experience.</p>
                    </div>
                </div>
            </div>

            <div className='fixed w-full bottom-3 p-2'>
                <div className='mx-auto max-w-5xl shadow-md bg-[#B5C0D0] flex md:flex-row flex-col  justify-between items-center px-7 py-3 rounded-2xl'>
                    <div className='flex gap-3 items-center justify-center'>
                        <div className=' font-Montserrat text-center'>
                            <p className='text-xs font-semibold'>First Hourly Charge</p>
                            <h5 className='text-lg font-bold mr-2'>₹ 300 </h5>
                            <p className='text-[0.6rem]'>(minimum charge)</p>
                        </div>
                        {/* <hr className='hr-dot w-14 rotate-90' /> */}
                        <svg  width="6" height="50" viewBox="0 0 6 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 89.3333C1.52724 89.3333 0.333333 90.5272 0.333333 92C0.333333 93.4728 1.52724 94.6667 3 94.6667C4.47276 94.6667 5.66667 93.4728 5.66667 92C5.66667 90.5272 4.47276 89.3333 3 89.3333ZM2.5 3L2.5 92H3.5L3.5 3H2.5Z" fill="black" />
                        </svg>

                        <div className=' font-Montserrat text-center'>
                            <p className='text-xs font-semibold'>Later Hourly Charge</p>
                            <h5 className='text-lg font-bold mr-2'>₹ 100 </h5>
                            <p className='text-[0.6rem]'>(extra charge)</p>
                        </div>

                    </div>
                    
                    <button className='bg-[#1c1e5f] md:max-w-40 w-full px-4 rounded-md py-1 font-Montserrat text-white md:m-0 mt-3'>Book Service</button>
                    
                </div>
            </div>
        </>
    )
}

export default ServiceDetails
