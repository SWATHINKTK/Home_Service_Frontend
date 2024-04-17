import React from 'react'
import Authentication from '../../components/Authentication/Authentication'
import WorkerOTPForm from '../../components/worker/WorkerOTPForm'

const WorkerOTP = () => {
  return (
    <>
    <Authentication worker={true} register={false} heading='OTP VERIFICATION' subHeading='' form={<WorkerOTPForm />} />
    </>
  )
}

export default WorkerOTP
