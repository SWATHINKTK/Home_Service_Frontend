import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase.config";

export const sendOTPWithPhoneNumber = async (phone: string, button:string) => {
    try {
        const verifier =  new RecaptchaVerifier(auth, button, {
            'size': 'invisible',
            'callback': (response:unknown) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("response",response)
            }
        });

        const phoneNumber = "+91" + phone
   
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber ,verifier);
        return confirmationResult;

    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error; 
    }
}

