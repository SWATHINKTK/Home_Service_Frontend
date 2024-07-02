import React, { useEffect, useRef, useState } from 'react'
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { storeConfirmationResultFirebase, storeUploadDocuments } from '../../../reducers/worker/workerSlice';
import { sendOTPWithPhoneNumber } from '../../../config/otpVerificationFirebase';



const RegisterStep2: React.FC = () => {
    const fileInputRefs = useRef<[HTMLInputElement | null, HTMLInputElement | null]>([null, null]);
    const [imageUrl, setImageUrl] = useState<[string | null, string | null]>([null, null]);
    const [imageFile, setImageFile] = useState<[File | null, File | null]>([null, null]);
    const [imageError, setImageError] = useState("");
    const navigate = useNavigate();
    const { workerRegister } = useAppSelector((state) => state.workerSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!workerRegister) {
            navigate('/worker/register')
        }
    }, [navigate, workerRegister])

    const handleDivClick = (index: number) => {
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index]?.click();
        }
    };

    const handleImageValidation = (file: File | null, imageType: string, fileSize: number, imageName: string) => {
        if (!file) {
            setImageError(`Upload ${imageName}`);
            return false;
        }

        if (!file?.type.startsWith(imageType)) {
            setImageError(`${imageType == 'image/png' ? `Upload ${imageName} Must be Png Format` : 'Upload Image Only'}`);
            return false;
        }

        if (Math.round(file.size / 1024) > fileSize * 1024) {
            setImageError(`Upload ${imageName} below ${fileSize}Mb Size.`);
            return false;
        }
        setImageError('');
        return true;
    }

    const handleChange = (index: number, fileType: string, fileSize: number, imageName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && handleImageValidation(file, fileType, fileSize, imageName)) {
            const url = URL.createObjectURL(file);
            if (index === 0) {
                setImageUrl([url, imageUrl[1]]);
                setImageFile([file, imageFile[1]]);
            } else if (index === 1) {
                setImageUrl([imageUrl[0], url]);
                setImageFile([imageFile[0], file]);
            }
        }
    };


    const handleUploadDocuments = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!imageFile[0] || !imageFile[1]) {
            setImageError("Please upload both certificate and id proof.");
            return;
        }
        dispatch(storeUploadDocuments(imageFile));
        const confirmationResultFirebase = await sendOTPWithPhoneNumber(workerRegister!.phoneNumber, "verifyBtn");
        dispatch(storeConfirmationResultFirebase(confirmationResultFirebase));
        toast.success('OTP Send to your mobile.please verify it.')
        navigate("/worker/register/otp");
    }
    return (
        <>
            <form onSubmit={handleUploadDocuments}>
                <div className="mt-4 flex gap-5">
                    <div className="w-44 h-44 border rounded-md border-black flex flex-col justify-center items-center"
                        onClick={() => handleDivClick(0)}
                        style={{ backgroundImage: imageUrl[0] ? `url(${imageUrl[0]})` : "none", backgroundSize: "cover", backgroundPosition: "center",}}
                    >
                        {!imageUrl[0] && (
                            <>
                                <TiPlus size={30} />
                                <h6 className="mt-1  font-semibold text-center">
                                    Upload Relevant Certificate
                                </h6>
                            </>
                        )}
                        <input type="file" accept="image/*" style={{ display: "none" }}
                            ref={(el) => {
                                if (el) fileInputRefs.current[0] = el;
                            }}
                            onChange={(event) => handleChange(0, 'image/', 10, 'image', event)}
                        />
                    </div>
                    <div className="w-44 h-44 border rounded-md border-black flex flex-col justify-center items-center" onClick={() => handleDivClick(1)}
                        style={{ backgroundImage: imageUrl[1] ? `url(${imageUrl[1]})` : "none", backgroundSize: "cover", backgroundPosition: "center",}}
                    >
                        {!imageUrl[1] && (
                            <>
                                <TiPlus size={30} />
                                <h6 className="mt-1  font-semibold text-center">
                                    Upload an ID Proof
                                </h6>
                            </>
                        )}
                        <input type="file" accept="image/*" style={{ display: "none" }}
                            ref={(el) => {
                                if (el) fileInputRefs.current[1] = el;
                            }}
                            onChange={(event) => handleChange(1, 'image/', 10, 'image', event)}
                        />
                    </div>
                </div>
                {imageError && (<p className="mx-3 mt-1 text-red-500 text-xs ">* {imageError}</p>)}
                <button id="verifyBtn" className="gradient-btn md:w-[69%] w-full font-Montserrat my-2 mt-6">
                    Verify OTP
                </button>
            </form>
        </>
    );
}

export default RegisterStep2
