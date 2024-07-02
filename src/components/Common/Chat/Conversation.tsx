import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import io, { Socket } from 'socket.io-client';
import { IoIosSend } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { MdOutlineEmojiEmotions } from "react-icons/md";

import './chat.css'
import Message from './Message';
import { sendMessageAPI, viewMessageAPI, viewReceiverAPI } from '../../../utils/api/chatAPI';
import { IMessage } from '../../../@types/message';

interface IReceiver{
    username:string;
    profile:string;
}

const Conversation = () => {
    const { conversationId } = useParams<{ conversationId: string }>();
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [ receiverData , setReceiverData] = useState<IReceiver>();
    const [ isEmojiOpen , setIsEmojiOpen ] = useState(false);
    const socket = useRef<Socket>();
    const location = useLocation();
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement>(null);
    const data = location.state?.data || {};


    useEffect(() => {
        socket.current = io(import.meta.env.VITE_BASE_URL);
    },[]);

    const fetchReceiverData = useCallback(async () => {
        const receiver = await viewReceiverAPI(data.receiverId, !data.user);
        setReceiverData(receiver.data);
    }, [data.receiverId, data.user]);

    useEffect(() => {
        fetchReceiverData();
    }, [fetchReceiverData]);



    useEffect(() => {
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

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setNewMessage(prev => prev + emojiData.emoji);
    }

    const handleSendMessage = async () => {
        if (!conversationId || newMessage == '') return;
        const newData: IMessage = {
            conversationId,
            senderId: data.senderId,
            receiverId: data.receiverId,
            text: newMessage,
            status: false,
            createdAt: new Date()
        }
        socket.current && socket.current.emit('sendMessage',newData);
        await sendMessageAPI(newData);
        setMessages([...messages, newData]);
        setNewMessage('');
    }

    const handleEnterButton = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key == 'Enter' && handleSendMessage();
    }


    return (
        <div>
            <div className='h-[9vh] w-full bg-[#f0f2f5] flex px-4 rounded-t-md'>
                <div className='flex justify-center items-center'>
                    <IoArrowBack className='cursor-pointer' onClick={() => navigate(`${data.user ? '/user/bookedServices' :'/worker/committedWorks'}`)}/>
                    <img className='h-10 w-10 mx-3 object-cover rounded-full border-2 drop-shadow-md' src={receiverData?.profile || 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='} alt="" />
                    <h6 className='font-semibold -mt-3 text-[1rem]'>{receiverData?.username}</h6>
                </div>
            </div>
           <div className='overflow-hidden'>
                <div className='overflow-y-auto md:h-[64vh] h-[82vh] px-3'>
                        {messages.map((msg, index) => (
                            <div key={index} ref={scrollRef}>
                                <Message sender={data.senderId == msg.senderId} msg={msg} />
                            </div>
                        ))}
                </div>
            </div>

            <div className='px-2 relative h-[7vh] flex gap-x-1 items-end justify-center'>
                <div className='absolute bottom-[100%]'><EmojiPicker open={isEmojiOpen} onEmojiClick={handleEmojiClick} /></div>
                    <button className='flex justify-center items-center bg-[#eaeaeac2] min-h-10 min-w-10 rounded-full' onClick={() => setIsEmojiOpen(!isEmojiOpen)}>
                        <MdOutlineEmojiEmotions size={25} color='#576872'/> 
                    </button>
                    <input placeholder="Message..." type="text" className='outline-none px-2 rounded-2xl min-h-10 w-[90%] bg-[#c6c7d288]' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={handleEnterButton} />
                    <button className='rotate-45 hover:text-white bg-blue-800 rounded-full min-h-10 min-w-10 flex justify-center items-center' onClick={handleSendMessage}>
                        <IoIosSend size={25} />
                    </button>    
            </div>
        </div>
    )
}

export default Conversation
