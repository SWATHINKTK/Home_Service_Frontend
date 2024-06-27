import React, { useEffect, useState } from 'react';
import { MdGppGood } from "react-icons/md";
import { SiOpenbadges } from "react-icons/si";

import Card from './Card';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import RecentCard from './RecentCard';
import { dashboardChartDataFetchingAPI, dashboardPerformanceDataFetchingAPI, dashboardRecentDataFetchingAPI } from '../../../utils/api/adminAPI';
import { IDashboardChartData, IDashboardRecentData, IPerformanceUserAndWorker } from '../../../@types/dashboard';
import Loader from '../../Common/Loader/Loader';
import PerformersCard from './PerformersCard';



const AdminDashboard: React.FC = () => {
    const [chartData, setChartData] = useState<IDashboardChartData>();
    const [recentData, setRecentData] = useState<IDashboardRecentData>();
    const [topWorkers, setTopWorkers] = useState<IPerformanceUserAndWorker[]>();
    const [topUsers, setTopUsers] = useState<IPerformanceUserAndWorker[]>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [chartResponse, recentResponse, performanceResponse] = await Promise.all([
                    dashboardChartDataFetchingAPI(),
                    dashboardRecentDataFetchingAPI(),
                    dashboardPerformanceDataFetchingAPI()
                ]);
                setTopWorkers(performanceResponse.data.topWorkers);
                setTopUsers(performanceResponse.data.topUsers);
                setChartData(chartResponse.data);
                setRecentData(recentResponse.data);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [])

    if (isLoading) {
        return <Loader />;
    }


    return (
        <div className='w-full font-Montserrat p-4'>
            <div className='flex gap-4'>
                <Card />
            </div>
            <AreaChart bookingData={chartData?.bookingCount || []} userData={chartData?.usersCount || []} />
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                <div className=' p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <h4 className='font-semibold text-md mb-3 text-[#192757]'>Recent Booking...</h4>
                    {recentData?.bookingsRecent.bookings.map((booking, index) => <RecentCard key={index} worker={false} data={booking} />)}
                </div>
                <PieChart serviceData={chartData?.servicePercentage || []} />
                <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <h4 className='font-semibold text-md mb-3 text-[#192757]'>New Worker...</h4>
                    {recentData?.workersRecent.workers.map((worker, index) => <RecentCard key={index} worker={true} data={worker} />)}
                </div>
            </div>
            <div className='my-8'>
                <h4 className='font-bold text-lg mb-1 text-[#192757] flex items-center'><MdGppGood className='mr-2' size={25} />Top Performing Works...</h4>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-4'>
                    {topWorkers?.map((worker, index) => (<PerformersCard key={index} data={worker} index={index + 1} worker={true} />))}
                </div>
            </div>
            <div className='my-8'>
                <h4 className='font-bold text-lg mb-1 text-[#192757] flex items-center'><SiOpenbadges className='mr-2' size={25} />Top Booking Users...</h4>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-4'>
                {topUsers?.map((user, index) => (<PerformersCard key={index} data={user} index={index + 1} worker={false} />))}
                   
                </div>
            </div>
            {/* <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <h4 className='font-semibold text-md mb-1 text-[#192757] flex items-center'><MdGppGood className='mr-2' size={20}/>Top Performing Works...</h4>
                    <hr className='h-[1px] bg-black' />
                    {recentData?.workersRecent.workers.map((worker, index) => <RecentCard key={index} worker={true} data={worker} />)}
                </div>
                <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <hr className='h-[1px] bg-black' />
                    {recentData?.workersRecent.workers.map((worker, index) => <RecentCard key={index} worker={true} data={worker} />)}
                </div>
            </div> */}
        </div>
    );
};

export default AdminDashboard;
