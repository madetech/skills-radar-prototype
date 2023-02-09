import { useState } from "react";
import { Data } from "./utils/Data";
import PieChart from "./components/PieChart"
import { BarChart } from "./components/BarChart";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart";
import Likert from "./components/Slider";
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

  const [chartData, setChartData] = useState({
    labels: Data.labels, 
    datasets: Data.datasets
  });
  
  console.log('dat', chartData);
  return (
    <div className="App">
      {/* <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} /> */}
      <RadarChart chartData={chartData} />
      <Likert chartData={chartData} />
    </div>
  );
}

export default App;
