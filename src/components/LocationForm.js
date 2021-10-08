import React from "react";

const locations = [
  "Bath",
  "Birmingham",
  "Bradford",
  "Brighton and Hove",
  "Bristol",
  "Cambridge",
  "Canterbury",
  "Carlisle",
  "Chester",
  "Chichester",
  "Coventry",
  "Derby",
  "Durham",
  "Ely",
  "Exeter",
  "Gloucester",
  "Hereford",
  "Kingston upon Hull",
  "Lancaster",
  "Leeds",
  "Leicester",
  "Lichfield",
  "Lincoln",
  "Liverpool",
  "City of London",
  "Manchester",
  "Newcastle upon Tyne",
  "Norwich",
  "Nottingham",
  "Oxford",
  "Peterborough",
  "Plymouth",
  "Portsmouth",
  "Preston",
  "Ripon",
  "Salford",
  "Salisbury",
  "Sheffield",
  "Southampton",
  "St Albans",
  "Stoke-on-Trent",
  "Sunderland",
  "Truro",
  "Wakefield",
  "Wells",
  "Westminster",
  "Winchester",
  "Wolverhampton",
  "Worcester",
  "York",
];

class LocationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownVisible: true,
      searchValue: "",
      location: "",
    };
  }

  renderLocations = () => {
    let dropdownElements = [];
    for (var locationId = 0; locationId < locations.length; locationId++) {
      if (
        locations[locationId]
          .toUpperCase()
          .indexOf(this.state.searchValue.toUpperCase()) > -1
      )
        dropdownElements.push(
          <a
            key={locations[locationId]}
            onClick={
              this.props.panelProperties.disabled
                ? () => {}
                : this.handleDropdownClick
            }
          >
            {locations[locationId]}
          </a>
        );
    }
    return dropdownElements;
  };

  handleDropdownClick = (event) => {
    this.setState({
      location: "Location : " + event.target.outerText,
      dropdownVisible: false,
    });
    this.props.setNextQuestion(0);
  };

  render() {
    return (
      <div className="sst_form">
        <div
          id="sst_locationHeader"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
          <img
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          ></img>
          <button
            disabled={this.props.panelProperties.disabled}
            onClick={(event) => {
              event.preventDefault();
              this.props.goBackQuestion();
            }}
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            Back
          </button>
        </div>
        <div autoComplete="off">
          <div
            id="sst_locationInputs"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="sst_hello"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <div style={{ fontSize: "22pt" }}>
                Hi {this.props.details.firstName}!
              </div>
            </div>
            <div
              id="sst_locationInput"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <div style={{ fontSize: "22pt" }}>
                Please let us know your location{" "}
              </div>
              <i
                className={
                  this.state.dropdownVisible
                    ? "chevron up icon"
                    : "chevron down icon"
                }
                onClick={() => {
                  this.setState((prevState) => {
                    return {
                      dropdownVisible: !prevState.dropdownVisible,
                    };
                  });
                }}
              />
            </div>
            <div
              id="sst_locationDropdown"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <div
                id="sst_locationDropdownBox"
                style={{
                  height: this.state.dropdownVisible ? "100%" : "0%",
                  transition: "height 2s",
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              >
                <input
                  type="text"
                  placeholder="Search.."
                  id="sst_myInput"
                  autoComplete="off"
                  onChange={(event) => {
                    this.setState({ searchValue: event.target.value });
                  }}
                  value={this.state.searchValue}
                  style={{
                    visibility: this.props.panelProperties.visible
                      ? "visible"
                      : "hidden",
                  }}
                />
                {this.renderLocations()}
              </div>
              <div
                style={{
                  background: "none",
                  padding: 0,
                  fontSize: "22pt",
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              >
                {this.state.location}
              </div>
            </div>
            <div id="sst_locationNext"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationForm;
