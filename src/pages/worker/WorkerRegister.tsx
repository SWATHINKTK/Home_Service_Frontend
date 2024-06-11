import React from 'react';
import { Helmet } from 'react-helmet-async';

import Authentication from '../../components/Common/AuthLayout/AuthLayout'
import WorkerRegisterForm from '../../components/Worker/WorkerRegister/WorkerRegisterForm'

const WorkerRegister:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Authentication
        worker={true}
        register={true}
        heading="Register"
        subHeading="Complete your registration in 3 simple steps!"
        form={<WorkerRegisterForm />}
      />
    </>
  );
}

export default WorkerRegister
