import React from 'react'

const LandingPageBusiness = () => {
  return (
    <div className='mt-40 w-full bg-[#091054] md:h-[26.75rem] flex justify-center place-items-center'>
      <div className=' w-[80%] h-[75%] text-white md:flex mt-7'> 
        <div className='md:w-6/12 h-full flex flex-col justify-center'>
            <h2 className='text-[2.5rem]  font-[600]'>One Stop</h2>
            <h2 className='text-[2.5rem] font-[600]'>Handyman Service</h2>
            <p className='mt-4 font-[200] w-[75%]'>We prioritize sustainability in every aspect of our work, aiming to create a greener and more eco-conscious future.</p>
        </div>
        {/* right side */}
        <div className='md:w-6/12 h-full mt-10'>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[100%] w-[100%]">
            <div className="flex justify-center items-center flex-col">
                <div>
                    <h1 className='text-[3rem] font-[700]'>28+</h1>
                    <h6 className='text-[1rem]'>Years Business</h6>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div>
                    <h1 className='text-[3rem] font-[700]'>28+</h1>
                    <h6 className='text-[1rem]'>Years Business</h6>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div>
                    <h1 className='text-[3rem] font-[700]'>28+</h1>
                    <h6 className='text-[1rem]'>Years Business</h6>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div>
                    <h1 className='text-[3rem] font-[700]'>28+</h1>
                    <h6 className='text-[1rem]'>Years Business</h6>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageBusiness
