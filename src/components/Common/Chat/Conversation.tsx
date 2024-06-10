import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { IoIosSend } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

import './chat.css'
import Message from './Message';
import { sendMessageAPI, viewMessageAPI } from '../../../utils/api/chatAPI';
import { IMessage } from '../../../@types/message';

const Conversation = () => {
    const { conversationId } = useParams<{ conversationId: string }>();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const socket = useRef<Socket>();
    const location = useLocation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const data = location.state?.data || {};
    console.log('sender', data.senderId)
    console.log('receiver', data.receiverId)
    console.log("--------------------------------------------------------")
    console.log('message', messages)

    useEffect(() => {
        socket.current = io("ws://localhost:3000")
    },[])


    useEffect(() => {
        console.log('effect')
        if (data.senderId && socket.current) {
            socket.current.emit('addUser', data.senderId)
            socket.current.on('getUsers', users => {
                console.log("users",users)
            })

            socket.current.on('getMessage', data => {
                setMessages([...messages, data])
            })
        }

        return () => {
            if(socket.current){
                socket.current.off('connect');
                socket.current.off('disconnect');
            }
          };

    }, [data.senderId, messages, socket])

    useEffect(() => {
        (async () => {
            if (conversationId) {
                const response = await viewMessageAPI(conversationId);
                setMessages(response.data)
            }
        })();
    }, [conversationId]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    const handleSendMessage = async () => {
        if (!conversationId) return;
        const newData: IMessage = {
            conversationId,
            senderId: data.senderId,
            receiverId: data.receiverId,
            text: newMessage,
            status: false,
            createdAt: new Date()
        }
        socket.current && socket.current.emit('sendMessage',newData);
        console.log('sendData', newData)
        await sendMessageAPI(newData);
        setMessages([...messages, newData]);
        setNewMessage('');
    }

    const handleEnterButton = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key == 'Enter' && handleSendMessage();
    }


    return (
        <section className='mx-auto max-w-6xl flex flex-col justify-end'>
            {/* <div className='h-14 w-full bg-[#c0c0c067] flex px-4 rounded-t-md'>
                <div className='flex justify-center items-center'>
                    <IoArrowBack className='cursor-pointer' />
                    <img className='h-10 w-10 mx-3 object-cover rounded-full border-2 drop-shadow-md' src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt="" />
                    <h6 className='font-semibold -mt-3 text-[1rem]'>Swathin</h6>
                </div>
            </div> */}
            <div className='h-[64vh] overflow-y-auto px-3'>
                {messages.map((msg, index) => (
                    <div key={index} ref={scrollRef}>
                        {/* <p className='tex-xs'>{"sender : "+data.senderId}<br></br>{"message.sender : "+msg.senderId}</p> */}
                        <Message sender={data.senderId == msg.senderId} msg={msg} />
                    </div>
                ))}
            </div>
            <div className='px-2'>
                <div className="flex justify-between border-2 border-[#6f6f6f] h-10 rounded-lg font-Montserrat text-sm px-3 hover:border-[#000]">
                    <input placeholder="Message..." type="text" className='outline-none w-full' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={handleEnterButton} />
                    <button className='hover:rotate-45 transition-transform duration-500 hover:text-teal-700' onClick={handleSendMessage}>
                        <IoIosSend size={25} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Conversation
