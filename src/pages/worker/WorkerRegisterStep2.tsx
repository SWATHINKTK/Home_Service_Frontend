import React from 'react'
import RegisterStep2 from '../../components/Worker/WorkerRegister/RegisterStep2';
import Authentication from '../../components/Common/AuthLayout/AuthLayout';

const WorkerRegisterStep2:React.FC = () => {
  return (
    <Authentication
      worker={true}
      register={true}
      heading="Upload Documents"
      subHeading="Step 2: Upload Documents to Verify Identity"
      form={<RegisterStep2 />}
    />
  );
}

export default WorkerRegisterStep2;
