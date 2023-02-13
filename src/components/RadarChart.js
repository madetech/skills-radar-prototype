import React from "react";
import Likert from 'react-likert-scale';
import { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {Chart, DatasetController, Filler} from 'chart.js'
Chart.register(Filler)

function RadarChart({ data }) {
  
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
      {
        data.labels.map((skill, index) => {
          const sliderTemplate = {
            question: skill,
            responses: [
              { value: 1, text: data.sliderPoints[index][0] },
              { value: 2, text: data.sliderPoints[index][1] },
              { value: 3, text: data.sliderPoints[index][2] },
              { value: 4, text: data.sliderPoints[index][3] },
              { value: 5, text: data.sliderPoints[index][4] }
            ],
            onChange: val => {
              console.log(val.value, ref);
              ref.current.data.datasets[3].data[index] = val.value;
              ref.current.update()
            }
          }
          return <Likert {...sliderTemplate}/>
        })
      }
    </div>
  );
}
export default RadarChart;
