import React from "react";
import Likert from 'react-likert-scale';
import { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {Chart, DatasetController, Filler} from 'chart.js'
Chart.register(Filler)

function RadarChart({ data }) {

  const Leadership = {
    question: "Leadersip & Strategy",
    responses: [
      { value: 1, text: "Follow" },
      { value: 2, text: "Apply" },
      { value: 3, text: "Contribute" },
      { value: 4, text: "Define" },
      { value: 5, text: "Inspire" }
    ],
    onChange: val => {
      console.log(val.value);
      ref.current.data.datasets[0].data[0] = val.value;
      ref.current.update()
    }
  };

  const Technical = {
    question: "Technical Communication",
    responses: [
      { value: 1, text: "Peers" },
      { value: 2, text: "CoP" },
      { value: 3, text: "multidisciplinary" },
      { value: 4, text: "Business" },
      { value: 5, text: "Exec" }
    ],
    onChange: val => {
      console.log(val.value);
      ref.current.data.datasets[0].data[2] = val.value;
      ref.current.update()
    }
  };

  const ref = React.createRef();

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Radar Chart</h2>
      <Radar
        ref={ref}
        data={data}
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
      <Likert {...Leadership} />
      <Likert {...Technical} />
    </div>
  );
}
export default RadarChart;
