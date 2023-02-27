import RadarContainer from "./Radar";
import Slider from "./Slider";
import SaveImage from "./SaveImage";
import { RadarConsumer } from "./RadarProvider";

function RadarChart() {
  return (
    <RadarConsumer>
      {({ state }) => (
        <div className="chart-container">
          <div>
            <div className="radar-chart">
              <RadarContainer />
              <SaveImage />
            </div>
          </div>
          <div className="sliders">
            {state.data.labels.map((skill, index) => {
              return (
                <Slider
                  key={`slider-${index}`}
                  skill={skill}
                  index={index}
                  descriptors={state.data.sliderPoints[index]}
                />
              );
            })}
          </div>
        </div>
      )}
    </RadarConsumer>
  );
}
export default RadarChart;
