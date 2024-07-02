import React from 'react'
// import { IoCheckmarkDoneSharp } from "react-icons/io5";
// import { BsHourglassSplit } from "react-icons/bs";
import { IBooking } from '../../../@types/booking';
import { IWorker } from '../../../@types/worker';
import { IUser } from '../../../@types/user';
import { IService } from '../../../@types/service';

interface IRecentCardProb{
    worker:boolean;
    data:IBooking | IWorker;
}

const url =
    "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";

const RecentCard:React.FC<IRecentCardProb> = ({worker, data}) => {
    return (
        <div className='flex justify-between items-center border-t  p-2 border-[#3c3c3c]'>
            <div className='flex gap-x-4'>
                <img className='h-12 w-12 object-cover rounded-lg border-2' src={worker ? url :((data as IBooking).serviceId as IService).image} alt="" />
                <div>
                    <h5 className='text-md font-bold'>{worker ? (data as IWorker).username :((data as IBooking).serviceId as IService).serviceName}</h5>
                    {worker ? <p className='text-sm'>Phn : <span>{(data as IWorker).phoneNumber}</span></p>:
                    <p className='text-sm'>User : <span>{((data as IBooking).userId as IUser).email}</span></p>}
                </div>
            </div>
            {/* {!worker ? <IoCheckmarkDoneSharp size={25} className='text-green-600'/> :
            <BsHourglassSplit size={25} className='text-red-600' />} */}
        </div>
    )
}

export default RecentCard
