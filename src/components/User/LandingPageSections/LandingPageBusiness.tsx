import React from "react";

const LandingPageBusiness:React.FC = () => {
  return (
    <div className="mt-10 w-full bg-[#091054] md:h-[26.75rem] flex justify-center place-items-center ">
      <div className=" w-[80%] h-[75%] text-white md:flex justify-between py-9">

        {/* Left side */}
        <div className="md:w-6/12 h-full flex flex-col justify-center font-[600] font-WixMadeForDisplay">
          <h2 className="text-[2.8rem] ">One Stop</h2>
          <h2 className="text-[2.5rem]">Handyman Service</h2>
          <p className="mt-4 font-[100] text-slate-300 w-[75%]">
            We prioritize sustainability in every aspect of our work, aiming to
            create a greener and more eco-conscious future.
          </p>
        </div>

        {/* right side */}
        <div className="md:w-6/12 h-full md:mt-0 mt-10 font-WixMadeForDisplay">
          <div className="grid grid-cols-2 md:gap-0 gap-5 grid-rows-2  h-[100%] w-[100%]">
            <div className="flex justify-center items-start flex-col">
              <div>
                <h1 className="text-[3rem] font-[700] border-t-2">28+</h1>
                <h6 className="lg:text-[1rem] text-[0.8rem]">Years Business</h6>
              </div>
            </div>
            <div className="flex justify-center items-start flex-col">
              <div>
                <h1 className="text-[3rem] font-[700] border-t-2">1550</h1>
                <h6 className="lg:text-[1rem] text-[0.8rem]">Project Achievements</h6>
              </div>
            </div>
            <div className="flex justify-center items-start flex-col">
              <div>
                <h1 className="text-[3rem] font-[700] border-t-2">26K</h1>
                <h6 className="lg:text-[1rem] text-[0.8rem]">Expert Members</h6>
              </div>
            </div>
            <div className="flex justify-center items-start flex-col">
              <div>
                <h1 className="text-[3rem] font-[700] border-t-2">15+</h1>
                <h6 className="lg:text-[1rem] text-[0.8rem]">No.Of Branches</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBusiness;
