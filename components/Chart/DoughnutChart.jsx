'use client'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const DoughnutChart = ({ data }) => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
