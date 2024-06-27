import { FaArrowRightLong } from "react-icons/fa6";

import "./landing.css";

const LandingPageBanner = () => {
  return (
    <>
      <div className="md:flex lg:h-[90vh]  lg:mx-32 md:mx-10">
        <div className="md:w-6/12  w-[100%] h-[100%] lg:my-16 my-10 px-4 lg:px-0 ">
          <div className="relative lg:w-[80%] flex items-center">
            <h2 className="w-[80%] font-Montserrat font-[500] lg:text-[89px] text-[50px] leading-none">
              Home services at your doorstep
            </h2>
            <div className="absolute -bottom-2 right-4 md:right-28 lg:right-3 -z-10">
              <svg className="lg:w-[250px] w-[200px]" viewBox="0 0 343 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.5177 21.8398C77.351 12.3398 153.21 -5.89061 227.21 8.09507C281.109 18.2817 338.268 36.4501 339.739 70.7726C341.21 105.095 243.558 126.575 175.239 131.773C106.851 136.975 8.7684 129.95 3.23922 96.2726C-2.28996 62.5951 89.1863 21.8067 157.518 14.3397C188.015 11.0072 205.864 11.6893 236.018 17.3397" stroke="#D3F985" stroke-width={6} stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <p className="md:w-[65%] mt-3 text-[11px] font-Montserrat opacity-95 font-medium text-slate-800">
            Discover the ease of accessing essential home services with a simple
            tap. Our platform connects you with reliable professionals, making
            household tasks effortless and stress-free.
          </p>
          <div className="md:text-left text-center mt-8">
            {/* <button className='bg-black text-white px-3 py-2 rounded-lg'>Explore Services</button> */}
            <button className="flex items-center gap-2 md:px-6  py-2 font-sans md:text-xs text-blue-900 md:text-white font-bold  md:bg-black uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20">
              Explore More
                <FaArrowRightLong/>
            </button>
          </div>
        </div>
        <div className=" md:w-6/12  w-[100%]  flex md:place-items-center justify-center md:px-0 px-4">
          <div className="bg lg:w-[96%]  lg:h-[87%] md:h-[90%] w-[100%] h-[46vh]"></div>
        </div>
      </div>
    </>
  );
};

export default LandingPageBanner;
