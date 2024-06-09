import React from 'react';
import { IoIosSend } from "react-icons/io";
import './chat.css'
import Message from './Message';

const Conversation = () => {
    return (
        <section className='mx-auto max-w-6xl flex flex-col justify-end'>
            {/* <div className='space-y-4'> */}
                <div className='h-[72vh] overflow-y-auto px-3'>
                    <Message sender={true} />
                    <Message />
                    <Message />
                </div>

                <div className='px-2'>
                    <div className="flex justify-between border-2 border-[#6f6f6f] h-10 rounded-lg font-Montserrat text-sm px-3 hover:border-[#000]">
                        <input placeholder="Message..." type="text" className='outline-none w-full' />
                        <button className='hover:rotate-45 transition-transform duration-500 hover:text-teal-700'>
                            <IoIosSend size={25} />
                        </button>
                    </div>

                </div>
            {/* </div> */}
        </section>
    )
}

export default Conversation
