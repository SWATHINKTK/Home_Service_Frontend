import React, { useEffect, useState } from 'react';
import Card from './Card';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import RecentCard from './RecentCard';
import { dashboardChartDataFetchingAPI, dashboardRecentDataFetchingAPI } from '../../../utils/api/adminAPI';
import { IDashboardChartData, IDashboardRecentData } from '../../../@types/dashboard';
import Loader from '../../Common/Loader/Loader';



const AdminDashboard: React.FC = () => {
    const [ chartData, setChartData ] = useState<IDashboardChartData>();
    const [ recentData, setRecentData ] = useState<IDashboardRecentData>();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const [chartResponse, recentResponse] = await Promise.all([
                    dashboardChartDataFetchingAPI(),
                    dashboardRecentDataFetchingAPI()
                ]);
                console.log(chartResponse)
                console.log('--------------------');
                console.log(recentResponse)
                setChartData(chartResponse.data);
                setRecentData(recentResponse.data);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    },[])

    if (isLoading) {
        return  <Loader />;
    }


    return (
        <div className='w-full font-Montserrat p-4'>
            <div className='flex gap-4'>
                <Card />
            </div>
            <AreaChart bookingData={chartData?.bookingCount || []} userData={chartData?.usersCount || []}/>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                <div className=' p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <h4 className='font-semibold text-md mb-3 text-[#192757]'>Recent Booking...</h4>
                    {recentData?.bookingsRecent.bookings.map((booking, index) => <RecentCard key={index} worker={false} data={booking} />)}
                </div>
                <PieChart serviceData={chartData?.servicePercentage || []}/>
                <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <h4 className='font-semibold text-md mb-3 text-[#192757]'>New Worker...</h4>
                    {recentData?.workersRecent.workers.map((worker, index) => <RecentCard key={index} worker={true} data={worker} />)}

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
