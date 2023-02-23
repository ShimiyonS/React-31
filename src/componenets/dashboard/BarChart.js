
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart"
        }
    }
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export const data = {
    labels,
    datasets: [
        {
            label: "Visitor",
            data: [65, 40, 60, 30, 20, 50],
            backgroundColor: "rgba(54,185,204,1)",
            barPercentage: 0.4
        },
        {
            label: "Borrower",
            data: [30, 20, 15, 10, 25, 8],
            backgroundColor: "rgba(28,200,138,1)",
            barPercentage: 0.4
        },

    ]
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
