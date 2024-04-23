import React, { CSSProperties, useState } from 'react'
import OTPInput from 'react-otp-input';

const UserOTPForm = () => {
    const [otp, setOTP] = useState('');
    const [error, setError] = useState("");

    const inputStyle: CSSProperties = {
        width:"2.8rem",
        fontSize:"1.4rem",
        fontWeight:"600",
        height:"2.8rem",
        borderRadius:"7px",
        boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        backgroundColor: "#F7F7F7",
        border:"1px solid #C7C8CC",
        borderColor:`${error? "#FF204E" : '#C7C8CC'}`,
        marginBottom:`${error? "0px" : '12px'}`
    };

   
   

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!/^\d+$/.test(otp)) {
            setError('Enter valid OTP');
            return;
        }
        alert('hello')
    }

    
    return (
        <>
        <div className='md:my-3 pt-5  md:block flex flex-col items-center'>
            <form onSubmit={handleSubmit}>
            <OTPInput
                value={otp}
                onChange={setOTP}
                numInputs={6}
                renderSeparator={<span className='mx-1.5'></span>}
                renderInput={(props) => <input {...props} onFocus={() => setError('')} />}
                inputStyle={inputStyle} 
            />
            {error && <p className="mt-1 mx-1 text-red-500 text-xs">{error}</p>}
            <button className={`login-btn my-2  w-[20.5rem] font-Montserrat `}>
            Verify
            </button>
            </form>
        </div>
        </>
    );
    
}

export default UserOTPForm;
