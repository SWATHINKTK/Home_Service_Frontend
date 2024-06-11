import React from 'react';
import { Helmet } from 'react-helmet-async';

import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import WorkerOTPForm from '../../components/Worker/OTPVerification/WorkerOTPForm'

const WorkerOTP = () => {
  return (
    <>
      <Helmet>
        <title>OTP</title>
      </Helmet>
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
