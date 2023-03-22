import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Mutual Funds', 'Stocks', 'Futures & Options', 'US Stocks', 'IPO'],
  datasets: [
    {
      label: 'Investors in millions',
      data: [7, 8, 3, 5, 2],
      backgroundColor: [
        'rgb(0,208,156)',
        'rgb(83,103,255)',
        'rgb(255,182,27)',
        'rgb(238,113,86)',
        'rgb(137,49,104)',
      ],
      borderColor: [
        'rgb(0,208,156)',
        'rgb(83,103,255)',
        'rgb(255,182,27)',
        'rgb(238,113,86)',
        'rgb(137,49,104)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function DataChart() {
  return <Pie data={data} />;
}
