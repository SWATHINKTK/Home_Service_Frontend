import React from 'react'
import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import WorkerLoginForm from '../../components/Worker/WorkerLogin/WorkerLoginForm'

const WorkerLogin = () => {
  return (
    <>
       <Authentication worker={true} register={false} heading='Login' subHeading='Login to access your worker account' form={<WorkerLoginForm/>} />
    </> 
  )
}

export default WorkerLogin
