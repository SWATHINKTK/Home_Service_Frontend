import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

type NavbarProb = {
    user: boolean;
    special: boolean;
}

const Navbar: React.FC<NavbarProb> = ({ user, special = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLocation, setIsLocation] = useState('');

    useEffect(() => {
        const fetchLocation = () => {
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
                enableHighAccuracy: true
            });

            async function successLocation(position: GeolocationPosition) {
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
                    const data = await response.json();
                    setIsLocation(`${data.address.village},${data.address.county}`)
                } catch (error) {
                    setIsLocation("No address found");
                }
            }
            function errorLocation() {
                alert('error')
            }
        }

        fetchLocation()
    }, [])

    // Function to toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className={`${user && !special ? 'bg-[#F8F8F8]' : 'bg-[#16185a]'} fixed w-full z-20  border-gray-200 font-Montserrat`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4  py-4 pr-2">
                    <div className="flex items-center gap-3 space-x-3 rtl:space-x-reverse">
                        <Link to={user ? '/' : '/worker'} >
                            <img src="/public/logo.svg" className="md:h-10 h-8 hidden md:block" alt=" Logo" />
                        </Link>
                        <div className="relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 md:ps-3.5 pointer-events-none">
                                <GrLocation className="size-6 md:size-5 " />
                            </div>
                            <input className="bg-gray-50 md:border-2 py-1 pl-9 rounded-lg  font-semibold border-[#D9D9D9] text-gray-900 text-sm" value={isLocation} disabled/>
                        </div>
                    </div>
                    <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-200" onClick={toggleMenu}>
                        <HiMenuAlt3 size={29} />
                    </button>
                    <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                        <ul className={`${user ? 'text-black' : 'text-white'} font-Montserrat text-[15px] font-[700] flex flex-col gap-2  p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                            <li>
                                <Link to={user ? '/' : '/worker'} className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={user ? '/service' : '/worker/bookings'} className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0">
                                    {user ? 'Services' : 'Bookings'}
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0">
                                    About
                                </a>
                            </li>
                            <li>
                                <Link to={user ? '/user/profile' : '/worker/profile'} className="block py-2 px-3 rounded-lg hover:text-blue-800 md:p-0">
                                    <BiUser size={22} className="hidden md:block" />{" "}
                                    <span className="block md:hidden font-Montserrat text-[15px] font-[700]  text-gray-900 rounded">
                                        Profile
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full mx-5 ml-7 mt-4 md:hidden ${!user && 'hidden'}`}>
                        <div className="relative w-full min-w-[200px] h-10 ">
                            <div className="absolute grid w-7 h-7 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                                <CiSearch size={27} />
                            </div>
                            <input
                                className="peer w-full h-full bg-white drop-shadow-md text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-w focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-white focus:border-gray-900"
                                placeholder=" "
                            />
                            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                Search Services
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="pt-20"></div> */}
            </>
    );
};

export default Navbar;
