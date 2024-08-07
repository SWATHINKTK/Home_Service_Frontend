import React from 'react'

const WorkerLandingPageBanner: React.FC = () => {
    return (
        <div className='relative h-[90vh] bg-[#16185a] text-white rounded-b-[20%] py-5'>
            <div className='w-[80%]  h-[80%] mx-auto flex '>
                <div className='w-[55%] h-full flex justify-center items-center'>
                    <div>
                        <h2 className='font-Montserrat font-[700] text-[2.2rem] w-[70%]'>Streamline Your Work with Ease</h2>
                        <p className='w-[80%] my-5 font-Montserrat text-[15px]'>Efficiently manage appointments, confirm tasks, and initiate work assignments seamlessly. Join our platform to optimize your workflow and maximize productivity.</p>
                    </div>
                </div>
                <div className='w-[45%] h-full flex justify-center'>
                    <img src="/worker/worker.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WorkerLandingPageBanner
