
import { CiSearch } from "react-icons/ci";

const LandingPageServiceSection = () => {
  return (
    <>
      <div className="mt-[7%]">
        {/* Searchbox Section */}
        <div className="w-3/12 md:block hidden mx-auto">
          <div className="relative w-full min-w-[200px] h-10">
            <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-4 right-6 -translate-y-2/4">
              <CiSearch size={27} />
            </div>
            <input
              className="peer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 text-sm py-2.5 rounded-full !pr-9 border-blue-gray-200"
              placeholder=" "
            />
            <label className="absolute left-3 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:text-blue-gray-500 peer-focus:-top-2 peer-focus:text-gray-900 peer-focus:text-[11px] text-sm px-1 transition-all peer-focus:top-0 pointer-events-none bg-white">
              Search Services
            </label>
          </div>
        </div>

        {/* Service Heading */}
        <div className="lg:mx-32 md:mx-10 mx-5 mt-7 ">
          <h2 className="font-Montserrat font-[650] text-[1.6rem]">
            Popular Services
          </h2>
        </div>
      </div>
      {/* Service Section */}
      <div className="lg:mx-44 flex gap-[4%] gap-y-9 flex-wrap my-6 justify-center">
        {/* 1 */}
        <div className="h-auto bg-gray-200 md:w-[15rem] w-[85%]  py-6 rounded-sm">
          <div className="flex flex-col place-items-center justify-center">
            <div className="flex place-items-center justify-center h-24 w-24 rounded-[37%] bg-[#C3F4BE]">
              <img
                className="object-contain w-[70%] h-[70%]"
                src="/public/user/cleanning.png"
                alt=""
              />
            </div>
            <h3 className="font-Montserrat text-[1.1rem] font-[650] mt-2">
              Cleanning
            </h3>
            <p className="text-center font-Montserrat mt-2 text-[9.8px] w-[78%]">
              Refresh your home with ease. Our platform now offers cleaning
              services at your fingertips, connecting you with trusted
              professionals for a spotless space.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="h-auto bg-gray-200 md:w-[15rem] w-[85%]  py-6 rounded-sm">
          <div className="flex flex-col place-items-center justify-center">
            <div className="flex place-items-center justify-center h-24 w-24 rounded-[37%] bg-[#C3F4BE]">
              <img
                className="object-contain w-[70%] h-[70%]"
                src="/public/user/plumbing.png"
                alt=""
              />
            </div>
            <h3 className="font-Montserrat text-[1.1rem] font-[650] mt-2">
              Plumbing
            </h3>
            <p className="text-center font-Montserrat mt-2 text-[9.8px] w-[78%]">
              Say goodbye to plumbing woes. Our platform now offers reliable
              plumbing services. Enjoy hassle-free solutions for all your
              plumbing needs.
            </p>
          </div>
        </div>

        {/* 3 */}

        <div className="h-auto bg-gray-200 md:w-[15rem] w-[85%] py-6 rounded-sm">
          <div className="flex flex-col place-items-center justify-center">
            <div className="flex place-items-center justify-center h-24 w-24 rounded-[37%] bg-[#C3F4BE]">
              <img
                className="object-contain w-[70%] h-[70%]"
                src="/public/user/electrician.png"
                alt=""
              />
            </div>
            <h3 className="font-Montserrat text-[1.1rem] font-[650] mt-2">
              Electrician
            </h3>
            <p className="text-center font-Montserrat mt-2 text-[9.8px] w-[78%]">
              Fix your gadgets effortlessly. Now offering electronic repair
              services alongside plumbing and electrical assistance. Your
              one-stop solution for all home needs.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="h-auto bg-gray-200 md:w-[15rem] w-[85%] py-6 rounded-sm">
          <div className="flex flex-col place-items-center justify-center">
            <div className="flex place-items-center justify-center h-24 w-24 rounded-[37%] bg-[#C3F4BE]">
              <img
                className="object-contain w-[70%] h-[70%]"
                src="/public/user/carpenter.png"
                alt=""
              />
            </div>
            <h3 className="font-Montserrat text-[1.1rem] font-[650] mt-2">
              Carpenter
            </h3>
            <p className="text-center font-Montserrat mt-2 text-[9.8px] w-[78%]">
              Refresh your home with ease. Our platform now offers cleaning
              services at your fingertips, connecting you with trusted
              professionals for a spotless space.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <button
    className="flex items-center gap-2 px-5 py-2 font-sans text-xs font-bold text-center font-Montserrat border-2 text-gray-900 align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
    type="button">
    All Services
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      className="w-5 h-5 animate-pulse">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
    </svg>
  </button>
      </div>
    </>
  );
};

export default LandingPageServiceSection;
