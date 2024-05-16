import React from "react";
import { TiTick } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LocationSelecting: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="max-w-7xl mx-auto my-6 px-3">
                <div className="flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center border-2 border-green-800 bg-slate-200">
                        <TiTick size={30} color='green' />
                    </div>
                    <div className="bg-green-800 h-[3px] text-xs rounded-full w-[40%]" ></div>
                    <div className="h-8 w-8  rounded-full flex items-center justify-center border-2 border-blue-600 bg-slate-200">
                        <FaLocationDot size={23} />
                    </div>
                    <div className="bg-slate-400 h-[3px] text-xs rounded-full w-[40%]" ></div>
                    <div className="h-8 w-8  rounded-full flex items-center justify-center border-2 border-slate-400 bg-slate-200">
                        <GoDotFill size={23} />
                    </div>
                </div>
            </div>

            <div className="max-w-5xl  mx-auto bg-slate-300 h-[60vh] px-3">

            </div>

            <div className="max-w-5xl  mx-auto flex justify-between my-4 font-Montserrat px-3">
                <button className="flex justify-center items-center duration-200 transform hover:-translate-x-2" onClick={() => navigate('/serviceDetails')}>
                    <IoIosArrowDropleft size={30} />
                    <h5 className="mx-2 font-semibold text-lg">Back</h5>
                </button>
                <button className="flex justify-center items-center duration-200 transform hover:translate-x-2">
                    <h5 className="mx-2 font-semibold text-lg">Next</h5>
                    <IoIosArrowDropleft className="rotate-180" size={30} />
                </button>
            </div>
        </>
    );
};

export default LocationSelecting;
