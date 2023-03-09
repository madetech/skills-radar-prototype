import React from "react";
import { Tooltip, createTheme, ThemeProvider } from "@mui/material";

class HoverLikertSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sliderDetail: null };
  }

  checkMouseIsOverClickableElement(target) {
    return (
      target.innerText.indexOf("Leadership & Strategy") === 0 ||
      target.className === "likertBand" ||
      target.innerHTML.indexOf("likertLegend") !== -1
    );
  }

  retrieveCorrectTextToCheckAgainst(target) {
    let textToUse = target.innerText;

    if (target.parentElement.innerHTML.indexOf("likertLegend") === -1) {
      textToUse = target.parentElement.innerText;
    }

    return textToUse;
  }

  getKeyForSliderDetail(textToUse) {
    let tooltip;
    let count = 0;

    // Don't want to use `#find` we want to know if there's any other matched
    // descriptors. If there any other descriptors it will show the wrong tooltip.
    Object.keys(this.props.descriptors).forEach((descriptor) => {
      if (textToUse.indexOf(descriptor) !== -1) {
        tooltip = descriptor;
        count++;
        return;
      }
      // We haven't found a tooltip/descriptor match
      this.setState({ sliderDetail: null });
    });

    if (!tooltip || count > 1) {
      this.setState({ sliderDetail: null });
      return null;
    }

    return tooltip;
  }

  handleOver = (evt) => {
    const target = evt.target;

    if (this.checkMouseIsOverClickableElement(target)) {
      this.setState({ sliderDetail: null });
      return;
    }

    const textToUse = this.retrieveCorrectTextToCheckAgainst(evt.target);
    const key = this.getKeyForSliderDetail(textToUse);
    const sliderDetail = this.props.descriptors[key];

    this.setState({ sliderDetail });
  };

  render() {
    const theme = createTheme({
      typography: {
        fontSize: 20,
      },
    });

    return (
      <div onMouseOver={this.handleOver}>
        <ThemeProvider theme={theme}>
          <Tooltip
            title={this.state.sliderDetail}
            arrow
            sx={{ fontSize: "20px" }}
          >
            {this.props.children}
          </Tooltip>
        </ThemeProvider>
      </div>
    );
  }
}

export default HoverLikertSlider;
