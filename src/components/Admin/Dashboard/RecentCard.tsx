import React from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsHourglassSplit } from "react-icons/bs";

interface IRecentCardProb{
    worker:boolean
}

const RecentCard:React.FC<IRecentCardProb> = ({worker}) => {
    return (
        <div className='flex justify-between items-center border-t  p-2 border-[#3c3c3c]'>
            <div className='flex gap-x-4'>
                <img className='h-12 w-12 object-cover rounded-lg border-2' src={worker ? '/public/indian-businessman-with-his-white-car.jpg' :"/public/user/carpenter.png"} alt="" />
                <div>
                    <h5 className='text-md font-bold'>{worker ? 'John' :'Electrical'}</h5>
                    {worker ? <p className='text-sm'>Phn : <span>7894561230</span></p>:
                    <p className='text-sm'>User : <span>swathinktk@gamil.com</span></p>}
                </div>
            </div>
            {!worker ? <IoCheckmarkDoneSharp size={25} className='text-green-600'/> :
            <BsHourglassSplit size={25} className='text-red-600' />}
        </div>
    )
}

export default RecentCard
