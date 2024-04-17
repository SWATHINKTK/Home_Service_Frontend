import React from 'react'
import Authentication from '../../components/Authentication/Authentication'
import WorkerRegisterForm from '../../components/worker/WorkerRegisterForm'

const WorkerRegister = () => {
  return (
   <>
   <Authentication worker={true} register={true} heading='Register' subHeading='Register to access your worker account' form={<WorkerRegisterForm />} />
   </> 
  )
}

export default WorkerRegister
