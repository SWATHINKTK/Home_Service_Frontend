import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout' 
import UserLoginForm from '../../components/User/Login/UserLoginForm'

const UserLogin = () => {
  return (
    <>
    <Authentication worker={false} register={false} heading="Welcome Back"  subHeading="Please sign in to continue"  form={<UserLoginForm />} />
    </>
  )
}

export default UserLogin
