import React from 'react';

interface IMessageProb{
    sender:boolean;
}

const Message: React.FC<IMessageProb> = ({sender}) => {
    return (
        <div className='mt-4'>
            <div className={`${sender && 'flex-row-reverse'} flex items-end gap-x-2 cursor-pointer`}>
                <img className='h-10 w-10 object-cover rounded-full' src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt="" />
                {/* <div className='h-10 w-10  bg-slate-600 rounded-full mt-5' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=')", backgroundSize: "contain" }}></div> */}
                <p className={`text-[1.1rem] md:max-w-[21rem]  px-3 py-1 mb-2  ${sender ? 'rounded-tr-2xl rounded-tl-lg rounded-bl-2xl bg-[#362bae] text-white' : 'bg-[#c0c0c09b] rounded-br-2xl rounded-tl-2xl rounded-tr-lg'}`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
            </div>
            <div className={`${sender && 'flex-row-reverse'} text-xs mt-1 flex`}>
                1 hour ago
            </div>
        </div>
    )
}

export default Message
