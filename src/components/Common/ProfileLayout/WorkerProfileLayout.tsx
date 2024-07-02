import React, { useEffect, useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { VscChecklist } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './profileLayout.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { workerLogout } from '../../../reducers/worker/middlewares/workerLogoutThunk';
import moment from 'moment';
import Navbar from '../Navbar/Navbar';


const ProfileLayout: React.FC = () => {
    const url =
        "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=";
    const menus = [
        [{ name: "Manage Profile", description: "edit your account information", link: "/worker/profile/accountInformation", icon: LuUser2 },
        { name: "Payment Method", description: "add your credit card and debit card", link: "/worker/profile/payments", icon: MdPayment }
        ],
        [{ name: "My Booking", description: "edit or add new address", link: "/worker/profile/committedWorks", icon: FaRegRectangleList },
        { name: "Booking History", description: "edit or add new address", link: "/worker/profile/booking/history", icon: VscChecklist, },
        ],
        [{ name: "About", description: "edit or add new address", link: "/worker/about", icon: FaQuestion, }],
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const { worker } = useAppSelector((state) => state.workerSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if(!isSmallScreen && location.pathname.endsWith('/worker/profile')){
            navigate('/worker/profile/accountInformation')
        }
    },[isSmallScreen, location.pathname, navigate])

    const handleLogout = () => {
        dispatch(workerLogout());
    }

    if (isSmallScreen && location.pathname.startsWith('/worker/profile/')) {
        return (
            <section className="w-full h-[100vh] overflow-y-auto md:pt-24 font-Montserrat">
                <Outlet />
            </section>
        );
    }

    return (
        <>
            <Navbar worker={true} special={false} />
            <section className="md:flex gap-x-2 md:mx-11 h-[100vh] pt-24 font-Montserrat">
                <div className={`rounded-lg m  ${isMenuOpen ? "md:w-[25rem]" : "w-16 bg-[#9e9e9e71] "} duration-500  text-[#0e0e0e]  md:px-4 px-2`}>
                    <div className="py-3 md:flex hidden justify-end ">
                        <IoIosArrowDropright size={26} className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                    <div className="profile-top-div  w-full md:px-4 py-4">
                        <div className="flex justify-center items-center">
                            <div style={{ backgroundImage: `url(${worker?.profile ?? url})` }} className={`profile-img ${isMenuOpen ? "w-[6rem] h-[6rem]" : "hidden"} `}></div>
                            {isMenuOpen && (
                                <div>
                                    <h2 style={{ transitionDelay: `300ms` }} className={` whitespace-pre  mt-6 mx-3 font-Montserrat font-[700]`}>
                                        {worker?.username}
                                    </h2>
                                    <p className="text-[10px] mx-3 ">
                                        Register On : <span>{moment(worker?.createdAt).format('DD-MM-YYYY')}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col  relative">
                        {menus.map((menuInner, i) => (
                            <div key={i} className={`${isMenuOpen && "px-3 bg-[#F2F2F2] rounded-[7px] py-1 mb-3"} `}>
                                {menuInner.map((menu, index) => (
                                    <Link to={menu.link} key={index + i} className={`group mt-1 flex items-center text-sm gap-3.5 font-semibold font-Montserrat p-2 hover:bg-gray-300 rounded-md`} >
                                        <div>{React.createElement(menu.icon, { size: "21" })}</div>
                                        <div className={`flex flex-row justify-between items-center w-full ${!isMenuOpen && "opacity-0 translate-x-28 overflow-hidden"}  duration-500`}>
                                            <h2 style={{ transitionDelay: `${index + 3}00ms` }} className={`whitespace-pre duration-500 leading-none ${!isMenuOpen && "opacity-0 translate-x-28 overflow-hidden "}`}>
                                                {menu.name}
                                            </h2>
                                            <MdKeyboardArrowRight size={20} />
                                        </div>
                                        <h2 className={`${isMenuOpen && "hidden"} absolute left-48 w-0 overflow-hidden bg-white font-semibold whitespace-pre text-gray-800 rounded-md  drop-shadow-md group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-500 group-hover:w-fit`}>
                                            {menu.name}
                                        </h2>
                                    </Link>
                                ))}
                            </div>
                        ))}
                        <button className={`${isMenuOpen && "px-3 bg-[#F2F2F2] rounded-[7px] py-1 mb-3"} `} onClick={handleLogout}>
                            <div className="group mt-1 flex items-center text-sm gap-3.5 font-semibold font-Montserrat p-2 hover:bg-gray-300 rounded-md">
                                <div>{React.createElement(MdLogout, { size: "21" })}</div>
                                <div className={`flex flex-row justify-between items-center w-full ${!isMenuOpen && "opacity-0 translate-x-28 overflow-hidden"}  duration-500`}>
                                    <h2 style={{ transitionDelay: `${1 + 3}00ms` }} className={`whitespace-pre duration-500 leading-none ${!isMenuOpen && "opacity-0 translate-x-28 overflow-hidden "}`}>
                                        Log Out
                                    </h2>
                                    <MdKeyboardArrowRight size={20} />
                                </div>
                                <h2 className={`${isMenuOpen && "hidden"} absolute left-48 w-0 overflow-hidden bg-white font-semibold whitespace-pre text-gray-800 rounded-md  drop-shadow-md group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-500 group-hover:w-fit`}>
                                    Log out
                                </h2>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="w-full h-full overflow-y-auto hide-scrollbar">
                    <Outlet />
                </div>
            </section>
        </>
    );
}

export default ProfileLayout
