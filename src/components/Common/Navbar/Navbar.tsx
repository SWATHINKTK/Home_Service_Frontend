import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

type NavbarProb = {
  user:boolean;
}

const Navbar:React.FC<NavbarProb> = ({ user }) => {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className={`${user ? 'bg-[#F8F8F8]' : 'bg-[#16185a]'} drop-shadow-md border-gray-200`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4  py-4 pr-2">
          <a
            href="#"
            className="flex items-center gap-6 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/public/logo.svg"
              className="md:h-10 h-8 hidden md:block"
              alt=" Logo"
            />
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 md:ps-3.5 pointer-events-none">
                <GrLocation className="size-6 md:size-5 " />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 md:border-2 mt-1 md:mt-0 h-8 rounded-12  font-Montserrat border-[#D9D9D9] text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-9 md:ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select Your Location"
              />
            </div>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu} // Add onClick event handler
          >
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt3 size={29} />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className={`${user ? 'text-black' : 'text-white'} font-Montserrat text-[15px] font-[700] flex flex-col gap-2  p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              <li>
                <Link
                  to={user ? '/' : '/worker'}
                  className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  { user ? 'Services' :'Bookings'}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>

              <li>
                <Link
                  to={user ? 'user/profile' : '/worker/profile'}
                  className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <BiUser size={22} className="hidden md:block" />{" "}
                  <span className="block md:hidden font-Montserrat text-[15px] font-[700]  text-gray-900 rounded">
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full mx-5 ml-7 mt-4 md:hidden ">
            <div className="relative w-full min-w-[200px] h-10 ">
              <div className="absolute grid w-7 h-7 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                <CiSearch size={27} />
              </div>
              <input
                className="peer w-full h-full bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-w focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-white focus:border-gray-900"
                placeholder=" "
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Search Services
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
