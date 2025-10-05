// components/DashboardChart.tsx
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

// Line Chart Data
const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Books Borrowed',
            data: [12, 19, 7, 15, 22, 10, 9],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#3B82F6',
        },
        {
            label: 'Books Returned',
            data: [8, 14, 5, 10, 18, 9, 6],
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.2)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#F59E0B',
        },
    ],
};

// Line Chart Options
const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
            labels: {
                color: '#ffffff',
            },
        },
        title: {
            display: true,
            text: 'Weekly Borrowing Activity',
            color: '#ffffff',
            font: {
                size: 18,
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#ffffff',
            },
            grid: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
        y: {
            ticks: {
                color: '#ffffff',
            },
            grid: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
    },
};

// Pie Chart Data
const pieData = {
    labels: ['Total Borrowed', 'Total Returned'],
    datasets: [
        {
            label: 'Books',
            data: [94, 70],
            backgroundColor: ['#3B82F6', '#F59E0B'],
            borderColor: ['#ffffff'],
            borderWidth: 1,
        },
    ],
};

// Pie Chart Options
const pieOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
            labels: {
                color: '#ffffff',
            },
        },
        title: {
            display: true,
            text: 'Total Borrowed vs Returned',
            color: '#ffffff',
            font: {
                size: 16,
            },
        },
    },
};

const DashboardChart: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded shadow h-[500px]">
                <Line data={lineData} options={lineOptions} />
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
                <Pie data={pieData} options={pieOptions} />
            </div>
        </div>
    );
};

export default DashboardChart;
