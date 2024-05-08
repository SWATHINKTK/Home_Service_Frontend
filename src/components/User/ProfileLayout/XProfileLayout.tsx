import React, { useState } from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";
import { VscChecklist } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import './profileLayout.css';

const ProfileLayout: React.FC = () => {
    const menus = [
      [
        {
          name: "Account Details",
          description: "edit your account information",
          link: "/user/profile",
          icon: LuUser2,
        },
        {
          name: "Payment Method",
          description: "add your credit card and debit card",
          link: "/",
          icon: MdPayment,
        },
        {
          name: "Address",
          description: "edit or add new address",
          link: "/",
          icon: ImLocation,
        },
      ],
      [
        {
          name: "My Booking",
          description: "edit or add new address",
          link: "/",
          icon: FaRegRectangleList,
        },
        {
          name: "Service History",
          description: "edit or add new address",
          link: "/",
          icon: VscChecklist,
        },
      ],
      [
        {
          name: "Helps",
          description: "edit or add new address",
          link: "/",
          icon: FaQuestion,
        },
        {
          name: "Log out",
          description: "edit or add new address",
          link: "/",
          icon: MdLogout,
        },
      ],
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    console.log(isMenuOpen)
    return (
      <section className="md:flex gap-6 md:my-6  md:mx-11 h-[80vh]">
        <div
          className={`bg-transparent min-h-[80vh] rounded-lg ${
            isMenuOpen ? "w-[25rem]" : "w-16"
          } duration-500  text-[#0e0e0e]  md:px-4 px-2`}
        >
          <div className="py-3 md:flex hidden justify-end">
            <IoIosArrowDropright
              size={26}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div className="profile-top-div  w-full p-4">
            <div className="flex justify-center items-center">
              <div
                style={{
                  backgroundImage: 'url("/public/swathin.jpg")',
                }}
                className={`profile-img ${
                  isMenuOpen ? "w-[6rem] h-[6rem]" : "hidden"
                } `}
              ></div>
              {isMenuOpen && (
                <div>
                  <h2
                    style={{ transitionDelay: `300ms` }}
                    className={` whitespace-pre  mt-6 mx-3 font-Montserrat font-[700]`}
                  >
                    John Abraham
                  </h2>
                  <p className="text-[11px] mx-3 ">
                    Register On : <span>8/10/2008</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-col  relative">
            {menus.map((menuInner, i) => (
              <div
                key={i}
                className={`${
                  isMenuOpen && "px-3 bg-[#F2F2F2] rounded-[7px] py-1 mb-3"
                } `}
              >
                {menuInner.map((menu, index) => (
                  <Link
                    to={menu.link}
                    key={index + i}
                    className={`group mt-1 flex items-center text-md gap-3.5 font-semibold font-WixMadeForDisplay p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div>{React.createElement(menu.icon, { size: "21" })}</div>
                    <div className="flex flex-row justify-between w-full">
                        <div className='flex flex-col'>
                            <h2
                            style={{ transitionDelay: `${index + 3}00ms` }}
                            className={`whitespace-pre duration-500 leading-none ${
                                !isMenuOpen &&
                                "opacity-0 translate-x-28 overflow-hidden "
                            }`}
                            >
                            {menu.name}
                            </h2>
                            {/* <span
                            className={`whitespace-pre duration-500 mt-0.5 leading-none text-[9px] text-gray-600 font-thin ${
                                !isMenuOpen &&
                                "opacity-0 translate-x-28 overflow-hidden "
                            }`}
                            >
                            {menu.description}
                            </span> */}
                        </div>
                      <MdKeyboardArrowRight size={20} />
                    </div>
                    <h2
                      className={`${
                        isMenuOpen && "hidden"
                      } absolute left-48 w-0 overflow-hidden bg-white font-semibold whitespace-pre text-gray-800 rounded-md  drop-shadow-md group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-500 group-hover:w-fit`}
                    >
                      {menu.name}
                    </h2>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full text-xl bg-blue-300 overflow-scroll">
          <div className="overflow-y-scroll">
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
            <h1 className="mt-7">Right Side</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              cum veritatis rerum fugiat explicabo ea, facilis provident rem
              reprehenderit nisi numquam quis libero hic sint esse deleniti
              blanditiis laborum eligendi?
            </p>
          </div>
        </div>
      </section>
    );
}

export default ProfileLayout
