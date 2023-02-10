import RadarChart from "./components/RadarChart";
import { Data } from "./utils/Data";
import { useState, useEffect } from "react";
import Likert from 'react-likert-scale';
import './App.css';
import {Chart, ArcElement, BarElement, BarController, CategoryScale, LinearScale, PointElement, LineController, RadialLinearScale, LineElement, RadarController, Tooltip, Filler, Legend} from 'chart.js'
Chart.register(
  ArcElement,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Filler,
  Legend
);

function App() {
  console.log('dat', Data);
  return (
    <div className="App">
      <RadarChart data={Data}/>
    </div>
  );
}

export default App;