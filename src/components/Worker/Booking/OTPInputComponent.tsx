import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import OTPInput from 'react-otp-input';

interface IOTPInputProb{
    otp:string;
    setOTP:Dispatch<SetStateAction<string>>;
    error:string;
    setError:Dispatch<SetStateAction<string>>;
}

const OTPInputComponent: React.FC<IOTPInputProb> = ({ otp, setOTP, error, setError}) => {
   

    const inputStyle: CSSProperties = {
        width: "2.8rem",
        fontSize: "1.4rem",
        fontWeight: "600",
        height: "2.8rem",
        borderRadius: "7px",
        backgroundColor: "#F7F7F7",
        // border: "1px solid #C7C8CC",
        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderColor: `${error ? "#FF204E" : "#C7C8CC"}`,
        marginBottom: `${error ? "0px" : "12px"}`,
    };

    return (
        <>
            <OTPInput
                value={otp}
                onChange={setOTP}
                numInputs={6}
                renderSeparator={<span className="md:mx-1.5 mx-1"></span>}
                renderInput={(props) => (
                    <input {...props} onFocus={() => setError("")} />
                )}
                inputStyle={inputStyle}
            />
            {error && ( <p className="mt-1 mx-1 text-red-500 text-xs">{error}</p>)}
        </>
    );
}

export default OTPInputComponent;
