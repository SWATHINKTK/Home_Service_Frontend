import React from 'react'
import Authentication from '../../components/Authentication/Authentication' 
import UserLoginForm from '../../components/user/forms/UserLoginForm'

const UserLogin = () => {
  return (
    <>
    <Authentication worker={false} register={false} heading="Welcome Back"  subHeading="Please sign in to continue"  form={<UserLoginForm />} />
    </>
  )
}

export default UserLogin
