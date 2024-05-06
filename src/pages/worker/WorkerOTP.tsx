import React from 'react'
import Authentication from '../../components/Authentication/Authentication'
import WorkerOTPForm from '../../components/worker/forms/WorkerOTPForm'

const WorkerOTP = () => {
  return (
    <>
      <Authentication
        worker={true}
        register={false}
        heading="OTP Verification"
        subHeading="Step 3: Verify Identity with OTP"
        form={<WorkerOTPForm />}
      />
    </>
  );
}

export default WorkerOTP
