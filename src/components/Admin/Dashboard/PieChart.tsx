import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


const PieChart = () => {
    const series = [44, 55, 13, 43, 22]
    const options: ApexOptions = {
        chart: {
          width: 380,
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
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
  return (
    <ReactApexCharts options={options} series={series} type={'pie'} height={options.chart?.height} />
  )
}

export default PieChart
