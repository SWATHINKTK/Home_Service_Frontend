import React from 'react';
import { IMessage } from '../../../@types/message';
import moment from 'moment';

interface IMessageProb{
    sender:boolean;
    msg:IMessage;
}

const Message: React.FC<IMessageProb> = ({sender, msg}) => {
    return (
        <div className='mt-4'>
            <div className={`${sender && 'flex-row-reverse'} flex items-end gap-x-2 cursor-pointer`}>
                {/* <div className='h-10 w-10  bg-slate-600 rounded-full mt-5' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=')", backgroundSize: "contain" }}></div> */}
                <div className={`md:text-[1rem] text-[0.9rem] leading-5 md:max-w-[22rem] max-w-[75%]  px-4 py-2   ${sender ? 'rounded-tr-2xl rounded-tl-lg rounded-bl-2xl bg-[#c5c4d8]' : 'bg-[#96939c9b] rounded-br-2xl rounded-tl-2xl rounded-tr-lg'}`}>
                    {msg.text} 
                </div>
            </div>
            <div className={`${sender && 'flex-row-reverse'} text-xs mt-1 flex`}>
                {moment(msg.createdAt).format('YYYY-MM-DD HH:mm')}
            </div>
        </div>
    )
}

export default Message
