import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import UserRegisterForm from '../../components/User/Registration/UserRegisterForm'
import { Helmet } from 'react-helmet-async'

const UserRegistration:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Authentication worker={false} register={false} heading='Create Account'  subHeading='Please sign up to get started' form={<UserRegisterForm />} />
    </>
  )
}

export default UserRegistration
