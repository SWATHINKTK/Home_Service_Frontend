import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import UserOTPForm from '../../components/User/OTPVerification/UserOTPForm'

const UserOTPPage = () => {
  return (
    <>
        <Authentication worker={false} register={false}  heading='OTP Verification'  subHeading='Please verify our otp to get started' form={<UserOTPForm/>} />
    </>
  )
}

export default UserOTPPage
