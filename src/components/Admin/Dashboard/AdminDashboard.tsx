import React from 'react';
import Card from './Card';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import RecentCard from './RecentCard';



const AdminDashboard: React.FC = () => {


    return (
        <div className='w-full font-Montserrat p-4'>
            <div className='flex gap-4'>
                <Card />
            </div>
            <AreaChart />
            <div className='grid grid-cols-3 gap-10 mt-10'>
                <div className=' p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <h4 className='font-semibold text-md mb-3 text-[#192757]'>Recent Booking...</h4>
                    <RecentCard worker={false} />
                    <RecentCard worker={false} />
                    <RecentCard worker={false} />
                    <RecentCard worker={false} />
                </div>
                <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                    <PieChart />
                </div>

                <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
                <h4 className='font-semibold text-md mb-3 text-[#192757]'>New Worker...</h4>
                    <RecentCard worker={true}/>
                    <RecentCard worker={true}/>
                    <RecentCard worker={true}/>
                    <RecentCard worker={true}/>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
