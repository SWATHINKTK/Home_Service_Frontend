import React, { CSSProperties, useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { numberRegex } from '../../../constants/regex';
import { toast } from 'react-toastify';
import { workerRegisterAPI } from '../../../utils/api/workerAPI';

const WorkerOTPForm: React.FC = () => {
    const [otp, setOTP] = useState("");
    const [error, setError] = useState("");
    const { workerRegister, confirmationResultFirebase } = useAppSelector((state) => state.workerSlice);
    const navigate = useNavigate();

    useEffect(() => {
        if (!workerRegister) {
            navigate("/worker/register");
        }
    }, [navigate, workerRegister]);




    const inputStyle: CSSProperties = {
        width: "2.8rem",
        fontSize: "1.4rem",
        fontWeight: "600",
        height: "2.8rem",
        borderRadius: "7px",
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        backgroundColor: "#F7F7F7",
        border: "1px solid #C7C8CC",
        borderColor: `${error ? "#FF204E" : "#C7C8CC"}`,
        marginBottom: `${error ? "0px" : "12px"}`,
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!numberRegex.test(otp)) {
        setError("Enter valid OTP");
        return;
      }

      try {
        if (confirmationResultFirebase) {
            const verification = await confirmationResultFirebase.confirm(otp);
            const registerSendData = new FormData();
            Object.entries(workerRegister!).forEach(([key, value]) => registerSendData.append(key, value));
            registerSendData.append( "fireBaseAuth",JSON.stringify(verification) ); 
            console.log("verification", verification);
            const response = await workerRegisterAPI(registerSendData);
            if(response){
                toast.success("Registration Process Completed.Admin can verify after login");
                navigate('/worker/login');
            }
        } else {
          toast.error("Confirmation result is not available.");
        }
      } catch (error) {
        console.log("firebase error", error);
        toast.error("OTP Does not match.");
      }
    };

    return (
        <div className="md:my-3 pt-5  md:block flex flex-col items-center">
            <div className="w-[88%]">
                <form onSubmit={handleSubmit}>
                    <OTPInput
                        value={otp}
                        onChange={setOTP}
                        numInputs={6}
                        renderSeparator={<span className="mx-1.5"></span>}
                        renderInput={(props) => (
                            <input {...props} onFocus={() => setError("")} />
                        )}
                        inputStyle={inputStyle}
                    />
                    {error && (
                        <p className="mt-1 mx-1 text-red-500 text-xs">{error}</p>
                    )}

                    <button
                        className={`login-btn my-2  w-[20.5rem] font-Montserrat `}
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WorkerOTPForm;
