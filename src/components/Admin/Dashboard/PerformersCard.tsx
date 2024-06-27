import React from 'react';
import { IPerformanceUserAndWorker } from '../../../@types/dashboard';

interface IPerformersCardProb{
    worker:boolean;
    data:IPerformanceUserAndWorker,
    index:number
}

const PerformersCard: React.FC<IPerformersCardProb> = ({ worker, data, index }) => {
    return (
        <div className="relative flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5  dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className={`flex ${worker && 'flex-col justify-center items-center'}`}>
                <img src="/public/worker.png" className='max-h-14 max-w-14 object-cover rounded-full border-2' alt="" />
                <div className='mx-2'>
                    <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">
                        {data.name}
                    </h3>
                    <p className="text-xs font-medium text-center uppercase text-gray-500 dark:text-neutral-500">
                        {data.email}
                    </p>
                </div>
            </div>
           {worker && <div className={`h-9 w-9 font-WixMadeForDisplay absolute flex justify-center items-center bg-[#36BA98] left-0`}>
                <h1 className='text-white text-xl font-bold'>{index}</h1>
            </div>}
            {worker && <h3 className='text-center mt-1 text-lg font-semibold'>₹ {data.sum}</h3>}
        </div>

    )
}

export default PerformersCard
