import React from "react";

class EmailForm extends React.Component {
  constructor() {
    super();

    this.state = {
      details: {
        completed: false,
        firstName: "",
        surname: "",
        companyName: "",
        jobTitle: "",
        email: "",
      },
      errors: {
        firstName: "",
        surname: "",
        companyName: "",
        jobTitle: "",
        email: "",
      },
    };
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      details: {
        ...prevState.details,
        [event.target.name]: event.target.value,
      },
    }));
  };

  checkInputs = () => {
    const emailRegex = new RegExp("^[a-z,.'-]+$", "i");

    let inputsValid = true;
    if (!emailRegex.test(this.state.details.email)) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, email: "Input is not valid" },
      }));
    }
    this.setState((prevState) => ({
      ...prevState,
      details: { ...prevState.details, completed: inputsValid },
    }));

    return inputsValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkInputs()) {
      this.props.setNextQuestion(-1);
      this.props.updateDetails(this.state.details);
    }
  };

  render() {
    return (
      <form autoComplete="off">
        <div
          id="header"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
          <div
            id="titleDiv"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="title"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <h1
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              >
                Find out where your location is on its innovation journey.
              </h1>
              <div
                id="titleDownwardSlide"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
            </div>
          </div>
          <div
            id="descriptionDiv"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <p
              id="description"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              If you lead or are involved in a particular neighbourhood or place
              that is or can become a hub of innovation. In three simple steps
              we will assess where you are up to, and discover what priorities
              may lie ahead!
            </p>
          </div>
        </div>
        <div
          id="inputs"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
          <div
            id="emailInput"
            className="inputDiv"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <input
              className="inputs"
              type="text"
              name="email"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="Email*"
              autoComplete="off"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            />
            <div
              className="upwardSlide"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            />
          </div>
          <div id="confirmEmailInput" className="inputDiv">
            <input
              className="inputs"
              type="text"
              name="confirmEmail"
              value={this.state.surname}
              onChange={this.handleChange}
              placeholder="Confirm Email*"
              autoComplete="off"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            />
            <div className="upwardSlide" />
          </div>

          <button
            id="submitForm"
            onClick={this.handleSubmit}
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default EmailForm;
