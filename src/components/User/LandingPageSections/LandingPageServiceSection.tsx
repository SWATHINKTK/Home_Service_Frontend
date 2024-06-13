
import { CiSearch } from "react-icons/ci";
import { IService } from "../../../@types/service";
import { useEffect, useState } from "react";
import { serviceListAPI } from "../../../utils/api/userAPI";
import { useNavigate } from "react-router-dom";

const LandingPageServiceSection = () => {

    const navigate = useNavigate();
    const [services, setServices] = useState<IService[]>([]);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
	const [search, setSearch] = useState<string>('');

 
    useEffect(() => {
		const debounce = setTimeout(() => {
			if(searchTerm != null){
				setSearch(searchTerm);
			}
		}, 600);
		return () => clearTimeout(debounce)
	},[searchTerm])


    useEffect(() => {
        const fetchServices = async () => {
            const response = await serviceListAPI(1,search);
            setServices(response.data)
        }
        fetchServices();
    }, [ search]);

    return (
        <>
        <div className=" max-w-7xl mx-auto mt-[7%]">
                {/* Searchbox Section */}
                <div className="w-3/12 md:block hidden mx-auto">
                    <div className="relative w-full min-w-[200px] h-10">
                        <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-4 right-6 -translate-y-2/4">
                            <CiSearch size={27} />
                        </div>
                        <input
                            className="peer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 transition-all border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 text-sm py-2.5 rounded-full !pr-9 border-blue-gray-200"
                            placeholder=" "
                            onChange={(e) => setSearchTerm(e.target.value)} 
                        />
                        <label className="absolute left-3 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:text-blue-gray-500 peer-focus:-top-2 peer-focus:text-gray-900 peer-focus:text-[11px] text-sm px-1 transition-all pointer-events-none bg-white">
                            Search Services
                        </label>
                    </div>
                </div>

                {/* Service Heading */}
                <div className="mt-7 mx-3 lg:mx-0">
                    <h2 className="font-Montserrat font-[650] text-[1.6rem]">
                        Popular Services
                    </h2>
                </div>
            {/* Service Section */}
            {/* <div className="my-6 flex flex-wrap justify-center items-center"> */}
            <div className=" my-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center">
                {services.map((service) => (
                    <div key={service._id} className="h-auto transition-transform duration-300 hover:drop-shadow-lg ease-in-out transform hover:-translate-y-1 bg-[#F8F8F8] md:w-[15rem] w-[80%]  py-6 rounded-sm drop-shadow-md" onClick={() => navigate(`/service/${service._id}`)}>
                        <div className="flex flex-col place-items-center justify-center">
                            <div className="flex place-items-center justify-center h-24 w-24 rounded-[37%] bg-[#C3F4BE]">
                                <img
                                    className="object-contain w-[70%] h-[70%]"
                                    src={service.icon}
                                    alt=""
                                />
                            </div>
                            <h3 className="font-Montserrat text-[1.1rem] font-[650] mt-2">
                                {service.serviceName}
                            </h3>
                            <p className="text-center font-Montserrat mt-2 text-[9.8px] w-[78%]">
                                {service.serviceDescription}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
            {/* </div> */}
            <div className="flex justify-center">
                <button
                    className="flex items-center mt-3 transition-transform transform hover:scale-105 gap-2 px-5 py-2 font-sans text-xs font-bold text-center font-Montserrat border-2 text-gray-900 align-middle  rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                    onClick={() => navigate('/service')}
                    >
                    All Services
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        className="w-5 h-5 transition-transform  transform-gpu hover:translate-x-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                    </svg>
                </button>
            </div>
        </div>

        </>
    );
};

export default LandingPageServiceSection;
