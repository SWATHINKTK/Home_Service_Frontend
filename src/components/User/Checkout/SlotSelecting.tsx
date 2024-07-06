import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';

import { ISlot } from '../../../@types/checkout';

interface SlotSelectingProps {
    selectedSlot: ISlot;
    setSelectedSlot: React.Dispatch<React.SetStateAction<ISlot>>;
}


const SlotSelecting: React.FC<SlotSelectingProps> = ({ selectedSlot, setSelectedSlot }) => {
    const [availableDates, setAvailableDates] = useState<Date[]>();
    const [availableTimes, setAvailableTimes] = useState<Record<number, string>[]>([]);
    const [ currentDate, setCurrentDate] = useState<Date>();
    

    useEffect(() => {
        const now = new Date();
        const startDate = new Date(now.getHours() >= 17 ? now.setDate(now.getDate() + 1) : now);
        setCurrentDate(startDate)    
        const dates = [
            startDate,
            new Date(now.setDate(now.getDate() + 1)),
            new Date(now.setDate(now.getDate() + 1))
        ];
        setAvailableDates(dates);
    }, []);

    const times = useMemo(() => ({
        9: '9:00 AM - 10:00 AM',
        10: '10:00 AM - 11:00 AM',
        11: '11:00 AM - 12:00 AM',
        12: '12:00 AM - 01:00 PM',
        13: '01:00 PM - 02:00 PM',
        14: '02:00 PM - 03:00 PM',
        15: '03:00 PM - 04:00 PM',
        16: '04:00 PM - 05:00 PM',
        17: '05:00 PM - 06:00 PM',
    }), []);


    useEffect(() => {
        console.log('TM')
        const time = Object.entries(times).filter(([hour,]) => {
            if(!currentDate) return;
            const now = new Date();
            if(now < currentDate){
                return true
            }
            if(now.getHours() < parseInt(hour)){       
                return true
            }
        });
        setAvailableTimes(time)
        
    },[currentDate, times])

    const handleSelectDate = async(newDate:Date) => {
        // setSelectedSlot({
        //     date:newDate,
        //     startTime:undefined,
        //     endTime:undefined
        // })
        setCurrentDate(newDate)
    }

    const handleSelectTime = (startTime:string, endTime:string) => {
        const newDate = new Date(`${currentDate?.toISOString().split('T')[0]}T${startTime}`);
        setSelectedSlot({
            date:newDate,
            startTime,
            endTime
        })
    }
    
 
    return (
        <div className='md:w-[30vw] w-[94vw]  overflow-y-auto font-Montserrat md:p-5 px-3 py-5'>
            <h2 className='font-semibold text-xl'>Select Slot</h2>
            <div className='flex items-center gap-2 my-3'>
                {availableDates?.map((date,index) => (
                    <div key={index} 
                         className={`w-12 h-12 border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer ${date.getDate() == currentDate?.getDate() && 'border-blue-400'}`}
                         onClick={() => handleSelectDate(date)}
                    >
                        <h5 className='font-bold leading-none'>{date.getDate()}</h5>
                        <p className='text-sm'>{moment(date).format('MMM')}</p>
                    </div>
                ))}
                
            </div>
            <div className='flex flex-wrap gap-3'>
                {
                    availableTimes.map((time, index) => {
                        const timeStamp= time[1].split(' - ');
                        const startTime = timeStamp[0].split(' ')[0];
                        return (<p key={index} className={`text-sm p-1 border-2 cursor-pointer rounded-full ${time == selectedSlot.endTime && 'border-blue-400'}`} onClick={() => handleSelectTime(startTime, time[1])}>{time[1]}</p>)
                    })
                }
                
            </div>
        </div>
    )
}

export default SlotSelecting
