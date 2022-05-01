import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export type ChartProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
  options: {
    responsive: boolean;
    plugins: {
      legend: {
        position: string;
      };
      title: {
        display: boolean;
        text: string;
      };
    };
    scales: {
      y: {
        grid: {
          display: boolean;
        };
      };
      x: {
        grid: {
          display: boolean;
        };
      };
    };
  };
};

export const Chart: React.FC<ChartProps> = (props: ChartProps) => {
  const { data, options } = props;

  return <Bar options={options as any} data={data} />;
};
