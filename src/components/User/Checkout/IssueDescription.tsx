import React, { useState } from 'react';

interface IssueDescriptionProps {
    description:string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const IssueDescription: React.FC<IssueDescriptionProps> = ({description, setDescription}) => {
    const [issue, setIssue] = useState(description);
    const [error, setError] = useState('');
    const handleIssueBtn = () => {
        if(issue.trim() == ''){
            setError('Write your issue');
            return;
        }
        setDescription(issue)
    }
    return (
        <div className='md:w-[25vw] w-[94vw]  overflow-y-auto font-Montserrat md:p-5 px-3 py-5'>
            <h2 className='font-semibold'>Explain Your Issue</h2>
            <textarea rows={4} className='w-full mt-2 p-2 outline-none border-2' placeholder='Write your issue here...' onChange={(e) => setIssue(e.target.value)}></textarea>
            {error && <p className='text-sm'>{error}</p>}
            <button className='bg-[#000000e9] px-3 rounded-md text-white' onClick={handleIssueBtn}>Add</button>
        </div>
    )
}

export default IssueDescription
