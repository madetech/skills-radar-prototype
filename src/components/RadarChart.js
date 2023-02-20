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
          layout: {
            padding: 0
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
          },
          responsive: true,
          legend: {
              display: false
          },
          tooltips: {
              mode: 'single',
              backgroundColor: '#fff',
              bodyColor: '#888',
              titleColor: '#888'
          },
          scale: {
              ticks: {
                  beginAtZero: true,
                  display: false
              },
          },
          maintainAspectRatio: true,
          elements: {
              line: {
                   tension: 0,
              }
          }
        }
      }
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
              ref.current.data.datasets[3].data[index] = val.value;
              ref.current.update()
            },
            layout: 'stacked' 
          }
          return <Likert key={skill} {...sliderTemplate}/>
        })
      }
    </div>
  );
}
export default RadarChart;
