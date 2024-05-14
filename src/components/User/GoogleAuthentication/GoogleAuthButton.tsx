import React from 'react'
import { GoogleCredentialResponse, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

interface DecodedJwt {
    given_name: string;
    family_name: string;
    email: string;
    jti: string;
}

const GoogleAuthButton: React.FC = () => {
    const responseSuccess = (credentialResponse:GoogleCredentialResponse) => {
        const decode:DecodedJwt = jwtDecode(credentialResponse.credential!);
        console.log(decode)
        
        const dataToSend = {
            firstname:decode.given_name,
            lastname:decode.family_name,
            email:decode.email,
            password:decode.jti
        }
        console.log(dataToSend)
    }

    const responseError = () =>{
        console.log('login failed')
    }
    return (
        <GoogleLogin
            onSuccess={responseSuccess}
            onError={responseError}
            text='continue_with'
        />
    )
}

export default GoogleAuthButton
