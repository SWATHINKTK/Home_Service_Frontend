import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import UserRegisterForm from '../../components/User/Registration/UserRegisterForm'

const UserRegistration:React.FC = () => {
  return (
    <>
      <Authentication worker={false} register={false} heading='Create Account'  subHeading='Please sign up to get started' form={<UserRegisterForm />} />
    </>
  )
}

export default UserRegistration
