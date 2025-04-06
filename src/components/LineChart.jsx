import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const [filter, setFilter] = useState("week");

  // Sample data sets
  const chartData = {
    today: {
      labels: ["12am", "4am", "8am", "12pm", "4pm", "8pm"],
      data: [2, 4, 3, 5, 6, 4],
    },
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [12, 19, 8, 15, 20, 30, 25],
    },
    month: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 35) + 5),
    },
  };

  const dataSet = chartData[filter];
  const totalUsers = dataSet.data.reduce((sum, value) => sum + value, 0);

  const data = {
    labels: dataSet.labels,
    datasets: [
      {
        label: "New Users",
        data: dataSet.data,
        borderColor: "#ffffff",
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0.05)");
          return gradient;
        },
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#0d47a1",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: { weight: "500", size: 12 },
        },
        position: "top",
      },
      title: {
        display: true,
        text: `User Statistics - ${filter.charAt(0).toUpperCase() + filter.slice(1)}`,
        color: "#fff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ccc" },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5, color: "#ccc" },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
  };

  const filterButtonStyle = (active) => ({
    padding: "6px 16px",
    marginRight: "12px",
    border: "1px solid #ffffff55",
    borderRadius: "6px",
    background: active ? "#ffffff" : "#0d47a1",
    color: active ? "#0d47a1" : "#fff",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });

  return (
    <div
      style={{
        background: "#0d47a1",
        borderRadius: "16px",
        padding: "25px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        marginTop: "30px",
        color: "#fff",
      }}
    >
      {/* Filter buttons */}
      <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={() => setFilter("today")} style={filterButtonStyle(filter === "today")}>Today</button>
        <button onClick={() => setFilter("week")} style={filterButtonStyle(filter === "week")}>This Week</button>
        <button onClick={() => setFilter("month")} style={filterButtonStyle(filter === "month")}>This Month</button>
      </div>

      {/* Total count display */}
      <div style={{ marginBottom: "15px", fontSize: "16px", fontWeight: "500", color: "#fff" }}>
        Total {filter === "today" ? "Today's" : filter === "week" ? "This Week's" : "This Month's"} Users:{" "}
        <span style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff" }}>{totalUsers}</span>
      </div>

      {/* Chart */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
