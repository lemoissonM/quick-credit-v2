import React from "react";
import { Chart, ChartProps } from "../../ui/Chart";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const LoanChart: React.FC = () => {
    const monthArray = [];
    const chart = [
        [{month: 1, amount: 100}, {month: 2, amount: 200}, {month: 3, amount: 300}, {month: 4, amount: 400}, {month: 5, amount: 500}, {month: 6, amount: 600}, {month: 7, amount: 700}, {month: 8, amount: 800}, {month: 9, amount: 900}, {month: 10, amount: 1000}, {month: 11, amount: 1100}, {month: 12, amount: 1200}],
        [{month: 1, amount: 70}, {month: 2, amount: 50}, {month: 3, amount: 150}, {month: 4, amount: 550}, {month: 5, amount: 50}, {month: 11, amount: 800}, {month: 12, amount: 1000}],
    ];

    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      monthArray.push(date.getMonth());
    }
  
    const chartData: ChartProps = {
      data: {
        labels: monthArray.map((month) => months[month]).reverse?.(),
        datasets: [
          {
            label: 'Total',
            backgroundColor: '#000',
            data:
              monthArray
                .map((m) => chart?.[0]?.find?.((item: any) => item.month === m + 1)?.amount || 0)
                .reverse() || [],
          },
          {
            label: 'Used',
            backgroundColor: '#FCA311',
            data:
              monthArray
                .map((m) => chart?.[1]?.find?.((item: any) => item.month === m + 1)?.amount || 0)
                .reverse() || [],
          },
        ],
      },
      options,
    };
    return (
        <Chart {...chartData} />
    )
}

export default LoanChart;