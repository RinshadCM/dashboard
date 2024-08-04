import React from "react";
import Chart from "react-apexcharts";

const ChartActivity = () => {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    xaxis: {
      categories: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '12px'
        },
        formatter: function (value) {
          return value + 'k';
        }
      },
      tickAmount: 3,
      min: 0,
      max: 15
    },
    grid: {
      borderColor: '#374151',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '60%',
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      colors: ['#4361ee']
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.9,
        }
      }
    }
  };

  const series = [
    {
      name: "Activity",
      data: [3, 9, 5, 5, 5, 3, 7, 9, 15, 10, 5]
    }
  ];

  return (
    <div className='rounded px-3 pt-3' style={{backgroundColor:"#292A31"}}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-light m-0">Activity</h4>
        <select className="bg-gray-700 text-gray-300 rounded px-2 py-1" style={{backgroundColor: '#374151', color: '#D1D5DB', border: 'none'}}>
          <option value="">Weekly</option>
        </select>
      </div>
      <div className="mixed-chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={250}
        />
      </div>
    </div>
  );
}

export default ChartActivity;