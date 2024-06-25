import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { ICountByDate } from '../../../@types/dashboard';

interface IAreaChartProps {
    bookingData: ICountByDate[],
    userData: ICountByDate[]
}

const AreaChart: React.FC<IAreaChartProps> = ({ bookingData, userData }) => {

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 4); // Start date 5 months ago

    const completeBookingData = fillMissingMonths(bookingData, startDate);
    const completeUserData = fillMissingMonths(userData, startDate);

    const bookingSeriesData = generateChartData(completeBookingData);
    const userSeriesData = generateChartData(completeUserData);

    const series = [{
        name: 'Users',
        data: userSeriesData
    }, {
        name: 'Bookings',
        data: bookingSeriesData
    }];

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'area',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: completeBookingData.map(item => new Date(item._id.year, item._id.month - 1).toLocaleString('default', { month: 'long' }))
        },
        tooltip: {
            x: {
                format: 'MMM'
            },
        },
    };

    return (
        <div className='w-full my-4'>
            <ReactApexCharts options={options} series={series} type={'area'} height={options.chart?.height} />
        </div>
    );
};

export default AreaChart;

// Helper functions

const fillMissingMonths = (data: ICountByDate[], startDate: Date): ICountByDate[] => {
    const result: ICountByDate[] = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 5; i++) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // getMonth is zero-indexed

        const existingData = data.find(d => d._id.year === year && d._id.month === month);
        if (existingData) {
            result.push(existingData);
        } else {
            result.push({
                _id: { year, month },
                count: 0
            });
        }

        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return result;
};

const generateChartData = (data: ICountByDate[]): number[] => {
    return data.map(item => item.count);
};
