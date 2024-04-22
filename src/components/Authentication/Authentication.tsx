import React from "react";
interface AuthenticationProb {
  worker: boolean;
  register: boolean;
  heading: string;
  subHeading: string;
  form: React.ReactNode;
}
const Authentication: React.FC<AuthenticationProb> = ({
  worker,
  register,
  heading,
  subHeading,
  form,
}) => {
  return (
    <>
      <div className="login-main-div flex flex-col-reverse md:flex-row lg:h-[100vh] ">
        <div
          className={`lg:w-[50%] w-[100%] flex flex-col justify-center ${
            register ? "lg:px-28" : "lg:px-[13%]"
          } px-5 py-7 md:py-0 lg:py-0`}
        >
          <div className="mb-1">
            <h1 className="font-Montserrat tracking-wide font-[700] md:text-[2.5rem] text-[2rem]">
              {heading}
            </h1>
            <h6 className="font-[400]  text-[0.9rem] text-gray-500">
              {subHeading}
            </h6>
          </div>
          {form}
          <p className="font-Montserrat font-[300] text-[12px] text-gray-900 mt-1">
            By registering you with our{" "}
            <a className="text-[#9D5CE9] font-[500]" href="">
              Terms and Conditions
            </a>
          </p>
        </div>
        {worker ? (
          <div className=" lg:w-[50%] w-[100%] flex flex-col justify-end place-items-end">
            <img
              src="/public/user/image.png"
              className="lg:h-[70vh] w-auto md:rounded-none rounded-b-[20%]"
              alt=""
            />
          </div>
        ) : (
          <div className=" lg:w-[50%] w-[100%] flex md:flex-col flex-col-reverse justify-between place-items-center my-5 lg:my-0">
            <p className="hidden md:block  italic font-Montserrat md:text-[20px] text-[13px] w-[60%] text-center  lg:mt-28">
              " Experience excellence with every service. Trust our team to get
              the job done right! "
            </p>
            <img
              src="/public/user/login.png"
              className="lg:h-[70vh] h-[39vh] w-auto md:rounded-none rounded-b-[25%]"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Authentication;
