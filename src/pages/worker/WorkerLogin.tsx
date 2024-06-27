import React from 'react';
import { Helmet } from 'react-helmet-async';

import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import WorkerLoginForm from '../../components/Worker/WorkerLogin/WorkerLoginForm'

const WorkerLogin:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Authentication worker={true} register={false} heading='Login' subHeading='Login to access your worker account' form={<WorkerLoginForm />} />
    </>
  )
}

export default WorkerLogin
