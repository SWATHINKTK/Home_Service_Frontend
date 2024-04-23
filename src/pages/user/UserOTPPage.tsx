import React from 'react'
import Authentication from '../../components/Authentication/Authentication'
import UserOTPForm from '../../components/user/forms/UserOTPForm'

const UserOTPPage = () => {
  return (
    <>
        <Authentication worker={false} register={false}  heading='Create Account'  subHeading='Please sign up to get started' form={<UserOTPForm/>} />
    </>
  )
}

export default UserOTPPage
