import React from "react";
import './spinner.css'

const LoadingSpinner:React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-transparent bg-opacity-0.1 z-50">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
