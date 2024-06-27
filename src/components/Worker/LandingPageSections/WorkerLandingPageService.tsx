import React from 'react'

const WorkerLandingPageService:React.FC = () => {
  return (
    <div className='w-[50%] mx-auto mt-10 bg-[#F8F8F8] p-4 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
      <div className='flex justify-center mb-5'>
            <h2 className='font-Montserrat font-[600] text-xl'>Trusted Services</h2>
      </div>
      <div className='flex mx-10 justify-between'>
        <div className=''>
           <img src="/public/worker/quality.png" className='rounded-full w-16 h-16 mx-auto' alt=""  />
           <h6>High Quality</h6>
        </div>
        <div className=''>
        <img src="/public/worker/reliable.png" className='rounded-full w-16 h-16 mx-auto' alt=""  />
           <h6>Reliable Service</h6>
        </div>
        <div className=''>
        <img src="/public/worker/availability.png" className='rounded-full w-16 h-16 mx-auto' alt=""  />
           <h6>Instant Availability</h6>
        </div>
        <div className=''>
        <img src="/public/worker/affordable.png" className='rounded-full w-16 h-16 mx-auto' alt=""  />
           <h6>Affordable Price</h6>
        </div>
      </div>
    </div>
  )
}

export default WorkerLandingPageService
