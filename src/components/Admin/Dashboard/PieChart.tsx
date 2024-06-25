import React, { useEffect, useMemo, useState } from 'react';
import ReactApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { IServicePercentage } from '../../../@types/dashboard';

interface IPieChartProb {
    serviceData: IServicePercentage[]
}

const PieChart: React.FC<IPieChartProb> = ({ serviceData }) => {
    const [pieChartData, setPieChartData] = useState<Record<string,number>>({});

    useEffect(() => {
        const data = serviceData.reduce((acc, item) => {
            acc[item.serviceName] = item.percentage;
            return acc;
        }, {} as Record<string, number>);
        setPieChartData(data);
    }, [serviceData]);

    const series = useMemo(() => Object.values(pieChartData), [pieChartData]);

    const options: ApexOptions = useMemo(() => ({
        chart: {
            width: '100%',
            type: 'pie',
        },
        labels: Object.keys(pieChartData),
        legend: {
            position: 'bottom'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }), [pieChartData]);

    return (
        <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>
            <ReactApexCharts options={options} series={series} type='pie' height={options.chart?.height} />
        </div>
    );
}

export default PieChart;