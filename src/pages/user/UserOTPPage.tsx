import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import UserOTPForm from '../../components/User/OTPVerification/UserOTPForm'
import { Helmet } from 'react-helmet-async'

const UserOTPPage:React.FC = () => {
  return (
    <>
        <Helmet>
        <title>OTP Validation</title>
      </Helmet>
        <Authentication worker={false} register={false}  heading='OTP Verification'  subHeading='Please verify our otp to get started' form={<UserOTPForm/>} />
    </>
  )
}

export default UserOTPPage
