import React, { useEffect, useState } from 'react'
import { GiCash } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";

import { FaRegCalendarCheck } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { dashboardCardDataFetchAPI } from '../../../utils/api/adminAPI';

const data = [
    { icon: GiCash, heading: 'Total Sales', data: 0, amount: true },
    { icon: BsCashCoin, heading: 'Total Revenue', data: 0, amount: true },
    { icon: FaUsersLine, heading: 'Total Users', data: 0, },
    { icon: FaRegCalendarCheck, heading: 'Total Booking', data: 0 }
]
interface ICardData {
    icon: React.ComponentType,
    heading: string,
    data: number;
    amount?: boolean
}
const Card: React.FC = () => {
    const [cardData, setCardData] = useState<ICardData[]>(data);
    useEffect(() => {
        (async () => {
            const response = await dashboardCardDataFetchAPI();
            setCardData(
                [
                    { icon: GiCash, heading: 'Total Sales', data: response.data.totalSales, amount: true },
                    { icon: BsCashCoin, heading: 'Total Revenue', data: response.data.totalRevenue, amount: true },
                    { icon: FaUsersLine, heading: 'Total Users', data: response.data.totalUsers, },
                    { icon: FaUsersGear, heading: 'Total Workers', data: response.data.totalWorkers }
                ]
            )
        })();

    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-3 w-full">
            {cardData.map((card, index) => (
                <div key={index} className='bg-[#ffffffc5] flex justify-between items-center px-8 py-4 rounded-sm shadow-md mb-3'>
                    <div>
                        <h4 className='font-bold text-lg text-[#3445af]'>{card.heading}</h4>
                        <h1 className='text-3xl font-bold my-3'>{card.amount && <span>₹</span>} {card.data}</h1>
                    </div>
                    {/* <div className='bg-gradient-to-tl from-purple-700 to-pink-500 px-3 py-2 rounded-xl'> */}
                    {React.createElement(card.icon, { className: 'text-black', size: 40 } as React.ComponentProps<typeof card.icon>)}
                    {/* </div> */}
                </div>
            ))}
        </div>
    )
}

export default Card
