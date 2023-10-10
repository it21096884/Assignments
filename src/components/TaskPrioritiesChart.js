import React from "react";
import { Bar } from "react-chartjs-2";

function TaskPrioritiesChart({ data }) {
  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
