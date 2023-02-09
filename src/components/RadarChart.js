import React from "react";
import { Radar } from "react-chartjs-2";
import {Chart, Filler} from 'chart.js'
Chart.register(Filler)

function RadarChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Radar Chart</h2>
      <Radar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              align: "start",
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: true,
              align: "center"
            },
            
          },
          scales: {
            r: {
              max: 5,
              min: 0,
              ticks: {
                stepSize: 1,
                // backdropColor: "orange",
                color: "black"
              },
              grid: {
                color: "gray"
              },
              angleLines: {
                  color: "gray"
              },
              pointLabels: {
                font: {
                  size: 20
                }
              }
            }
          }
        }}
      />
    </div>
  );
}
export default RadarChart;
