import React from 'react'
import Authentication from '../../components/Authentication/Authentication'
import WorkerLoginForm from '../../components/worker/forms/WorkerLoginForm'

const WorkerLogin = () => {
  return (
    <>
       <Authentication worker={true} register={false} heading='Login' subHeading='Login to access your worker account' form={<WorkerLoginForm/>} />
    </> 
  )
}

export default WorkerLogin
