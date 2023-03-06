import Likert from "react-likert-scale";

import HoverLikertSlider from "./HoverLikertSlider";
import { RadarConsumer } from "./RadarProvider";

function Slider({ skill, index, descriptors }) {
  const sliderTemplate = {
    question: skill,
    responses: [
      { value: 1, text: descriptors[0] },
      { value: 2, text: descriptors[1] },
      { value: 3, text: descriptors[2] },
      { value: 4, text: descriptors[3] },
      { value: 5, text: descriptors[4] },
    ],
    layout: "stacked",
    style: { alignItems: "center" },
  };
  return (
    <RadarConsumer>
      {({ state, dispatch }) => (
        <HoverLikertSlider
          skill={skill}
          descriptors={descriptors}
          sliderDetails={state.data.sliderDetails[skill]}
        >
          <Likert
            key={skill}
            onChange={(val) => {
              state.data.datasets[3].data[index] = val.value;
              dispatch({ type: "update", data: state.data });
            }}
            {...sliderTemplate}
          />
        </HoverLikertSlider>
      )}
    </RadarConsumer>
  );
}

export default Slider;
