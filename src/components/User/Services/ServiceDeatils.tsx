import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceOverView = React.lazy(() => import('./ServiceOverView'));
const ServiceWorking = React.lazy(() => import('./ServiceWorking'));
// const ServiceComments = React.lazy(() => import('./ServiceComments'));


import './serviceDetails.css'
import { IService } from '../../../@types/service';
import { serviceDataRetrieveAPI } from '../../../utils/api/userAPI';

const ServiceDetails: React.FC = () => {
    const [bottom, setBottom] = useState('-150px');
    const [ serviceData, setServiceData ] = useState<IService>();
    const navigate = useNavigate();
    const { serviceId } = useParams();


    const handleScroll = () => {
        const threshold = 100;
        if (window.scrollY > threshold) {
            setBottom('0');
        } else {
            setBottom('-150px');
        }
    };

    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async() => {
            if(serviceId){
                const response = await serviceDataRetrieveAPI(serviceId);
                setServiceData(response.data);
            }
        } 
        fetchData();
    },[serviceId])


    return (
        <div className='relative'>
            <section className='relative p-4'>
                <div className='md:block hidden max-w-5xl mx-auto  min-h-[18rem] h-auto rounded-lg' style={{ backgroundImage: `url('${serviceData?.image}')`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPositionY: 'center' }}> </div>
                <div className='md:hidden block mx-auto h-36'>
                    <img className='mx-auto rounded-lg object-cover h-full w-full' src={serviceData?.image} loading="lazy" alt="AC Repair Image" />
                </div>
                <svg className="absolute  right-full transform -z-10 md:-translate-y-3/4 -translate-y-3/4 translate-x-full lg:translate-x-full text-gray-200 h-32" fill="none" height="320" viewBox="0 0 100% 320" width="100%"><defs><pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" height="20" patternUnits="userSpaceOnUse" width="20" x="0" y="0"><rect className="text-accent-color-100" fill="currentColor" height="4" width="4" x="0" y="0"></rect></pattern></defs><rect fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" height="520" width="100vw"></rect></svg>
            </section>

            <article className='max-w-6xl mx-auto mb-10 pt-5 px-4 '>
                <div className='mt-4 '>
                    <h1 className='font-Montserrat font-bold tracking-wide md:text-[2rem] text-2xl '>{serviceData?.serviceName}</h1>
                    <div className='my-3'>
                        <p className=' font-Montserrat md:text-[0.9rem] leading-5 text-xs text-[#727272]'>{serviceData?.serviceDescription}</p>
                    </div>
                </div>
            </article>
            <Suspense fallback={<div>Loading...</div>}>
            <ServiceOverView />
            <ServiceWorking />
            {/* <ServiceComments /> */}
            </Suspense>
            <section className=' w-full  p-2 font-Montserrat z-10  sticky  md:bottom-auto transition-bottom duration-500' style={{ bottom: bottom }}>
                <div className='mx-auto max-w-5xl  bg-[#F0F3FF] shadow-lg flex md:flex-row flex-col  justify-between items-center px-7 py-3 rounded-2xl'>
                    <div className='flex gap-3 items-center justify-center'>
                        <div className=' text-center'>
                            <p className='text-xs font-semibold'>First Hourly Charge</p>
                            <h5 className='text-lg font-bold mr-2'>₹ {serviceData?.minimumAmount} </h5>
                            <p className='text-[0.6rem]'>(minimum charge)</p>
                        </div>
                        <svg width="6" height="50" viewBox="0 0 6 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 89.3333C1.52724 89.3333 0.333333 90.5272 0.333333 92C0.333333 93.4728 1.52724 94.6667 3 94.6667C4.47276 94.6667 5.66667 93.4728 5.66667 92C5.66667 90.5272 4.47276 89.3333 3 89.3333ZM2.5 3L2.5 92H3.5L3.5 3H2.5Z" fill="black" />
                        </svg>
                        <div className='text-center'>
                            <p className='text-xs font-semibold'>Later Hourly Charge</p>
                            <h5 className='text-lg font-bold mr-2'>₹ {serviceData?.hourlyAmount} </h5>
                            <p className='text-[0.6rem]'>(extra charge)</p>
                        </div>
                    </div>
                    <button className='bg-[#1c1e5f] md:max-w-40 w-full px-4 rounded-md py-1 font-Montserrat text-white md:m-0 mt-3' onClick={() => navigate(`/service/${serviceId}/currentLocation`)}>Book Service</button>
                </div>
            </section>
        </div>
    )
}

export default ServiceDetails
