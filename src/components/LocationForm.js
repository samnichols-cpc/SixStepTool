import React from "react";

const locations = ["England", "Wales", "a", "b", "c", "d"];

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
          <a key={locations[locationId]} onClick={this.handleDropdownClick}>
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
      <form>
        <div
          id="locationHeader"
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
        <div
          id="locationInputs"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
          <div
            id="hello"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <h3>Hi {this.props.details.firstName}!</h3>
          </div>
          <div
            id="locationInput"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <h3>Please let us know your location </h3>
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
            id="locationDropdown"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
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
                id="myInput"
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
            <h3
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              {this.state.location}
            </h3>
          </div>
          <div id="locationNext"></div>
        </div>
      </form>
    );
  }
}

export default LocationForm;
