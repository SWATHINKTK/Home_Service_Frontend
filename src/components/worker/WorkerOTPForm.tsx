import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const WorkerOTPForm = () => {
  const [code, setCode] = useState("");

  const handleChange = (code: string) => {
    setCode(code);
  };

  return (
    <OtpInput
      value={code}
      onChange={handleChange}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
};

export default WorkerOTPForm;
