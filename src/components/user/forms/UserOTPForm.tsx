import React, { CSSProperties, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { registerUser } from '../../../utils/api/userAPI';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../@types/user';
import { toast } from 'react-toastify';

const UserOTPForm = () => {
    const [otp, setOTP] = useState('');
    const [error, setError] = useState("");
    const { userData } = useAppSelector((state) => state.userRegisterSlice);
    const navigate = useNavigate();

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

   
   

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!/^\d+$/.test(otp)) {
            setError('Enter valid OTP');
            return;
        }
        try {

            if(userData){
                const registerData:IUser = {
                    firstname:userData.firstname,
                    lastname:userData.lastname,
                    email:userData.email,
                    phoneNumber:userData.phoneNumber,
                    district:userData.district,
                    password:userData.password,
                    userEnteredOTP:otp
                }
           
                const response = await registerUser(registerData);
                if(response.success){
                    toast.success(response.message,{
                        onClose:() => {
                            navigate('/login');
                        }
                    })
                    navigate('/login');
                }
            }else{
                toast.error('Registration Failed.');
                navigate('/register');
            }
        } catch (error) {
            console.log(error)
        }
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
