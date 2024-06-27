import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout' 
import UserLoginForm from '../../components/User/Login/UserLoginForm'
import { Helmet } from 'react-helmet-async'

const UserLogin:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
    <Authentication worker={false} register={false} heading="Welcome Back"  subHeading="Please sign in to continue"  form={<UserLoginForm />} />
    </>
  )
}

export default UserLogin
