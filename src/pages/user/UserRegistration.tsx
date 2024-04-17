import React from 'react'
import Authentication from '../../components/Authentication/Authentication'
import UserRegisterForm from '../../components/user/forms/UserRegisterForm'

const UserRegistration = () => {
  return (
    <>
    <Authentication worker={false} register={false} heading='Create Account'  subHeading='Please sign up to get started' form={<UserRegisterForm />} />
    </>
  )
}

export default UserRegistration
