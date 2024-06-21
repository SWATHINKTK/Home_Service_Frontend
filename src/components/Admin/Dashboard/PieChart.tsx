import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


const PieChart = () => {
    const series = [44, 55, 13, 43, 22]
    const options: ApexOptions = {
        chart: {
          width: '100%',
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
           position:'bottom'
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
      }
  return (
    <div className='p-4 bg-[#c1c1c12f] rounded-sm drop-shadow-sm'>

    <ReactApexCharts options={options} series={series} type={'pie'} height={options.chart?.height} />
    </div>
  )
}

export default PieChart
