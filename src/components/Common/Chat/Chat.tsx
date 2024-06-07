import React from 'react';
import { IoIosSend } from "react-icons/io";
import './chat.css'

const Chat = () => {
    return (
        <section className='mx-auto max-w-6xl md:px-7 px-3'>
            <div className='relative h-[77.6vh]'>
                <div className='absolute inset-0 overflow-y-scroll md:p-4'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <div className='h-10 w-10  bg-slate-600 rounded-full mt-7' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=')", backgroundSize: "contain" }}></div>
                            <div className='bg-[#c0c0c09b] w-[12.5rem] px-3 py-1 rounded-br-2xl rounded-tl-2xl rounded-tr-lg'>
                                <p className='text-[1.1rem] '>hello...How are you?</p>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse items-center gap-2'>
                            <div className='h-10 w-10  bg-slate-600 rounded-full mt-7' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=')", backgroundSize: "contain" }}></div>
                            <div className='bg-[#c0c0c09b] w-[12.5rem] px-3 py-1 rounded-tr-2xl rounded-tl-lg rounded-bl-2xl'>
                                <p className='text-[1.1rem]'>hello...How are you?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 py-2'>
                    <div className="flex justify-between border-2 border-[#6f6f6f] h-10 rounded-lg font-Montserrat text-sm px-3 hover:border-[#000]">
                        <input placeholder="Message..." type="text" className='outline-none w-full' />
                        <button className='hover:rotate-45 transition-transform duration-500 hover:text-green-500'>
                            <IoIosSend size={25}/>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Chat
