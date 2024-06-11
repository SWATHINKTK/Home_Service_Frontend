import React, { useState } from 'react'
import { GiCash } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
// import { FaUsersGear } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";

const data = [
    {
        icon:GiCash,
        heading:'Total Sales',
        data:6000,
        amount:true
    },
    {
        icon:BsCashCoin,
        heading:'Total Revenue',
        data:60,
        amount:true
    },
    {
        icon:FaUsersLine,
        heading:'Total Users',
        data:200,
    },
    {
        icon:FaRegCalendarCheck,
        heading:'Total Booking',
        data:27,
    }
]
const Card: React.FC = () => {
    const [cardData, setCardData] = useState(data)
    return (
        <>
            {cardData.map((card, index) => (
                <div key={index} className='w-3/12 bg-[#ffffffc5] flex justify-between items-center px-8 py-4 rounded-sm shadow-md mb-3'>
                    <div>
                        <h4 className='font-bold text-lg text-[#3445af]'>{card.heading}</h4>
                        <h1 className='text-3xl font-bold my-3'>{card.amount && <span>₹</span>} {card.data}</h1>
                    </div>
                    {/* <div className='bg-gradient-to-tl from-purple-700 to-pink-500 px-3 py-2 rounded-xl'> */}
                    {React.createElement(card.icon, { className: 'text-black', size: 40 })}
                    {/* </div> */}
                </div>
            ))}
        </>
    )
}

export default Card
