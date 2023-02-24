import RadarChart from "./components/RadarChart";
import { RadarProvider } from "./components/RadarProvider.js";
import "./App.css";
import {
  Chart,
  ArcElement,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  RadialLinearScale,
  LineElement,
  RadarController,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
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
  return (
    <RadarProvider>
      <h2 style={{ textAlign: "center" }}>Radar Chart</h2>

      <div className="App">
        <RadarChart />
      </div>
    </RadarProvider>
  );
}

export default App;
