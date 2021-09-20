import React from "react";

class DetailsForm extends React.Component {
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
    const firstNameRegex = new RegExp("^[a-z,.'-]+$", "i");
    const surnameRegex = new RegExp("^[a-z,.'-]+$", "i");

    let inputsValid = true;
    if (!firstNameRegex.test(this.state.details.firstName)) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, firstName: "Input is not valid" },
      }));
    }
    if (!surnameRegex.test(this.state.details.surname)) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, lastName: "Input is not valid" },
      }));
    }
    if (this.state.details.companyName.length === 0) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          companyName: "This is a required field",
        },
      }));
    }
    if (this.state.details.jobTitle.length === 0) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, jobTitle: "This is a required field" },
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
      this.props.setNextQuestion(-4);
      this.props.updateDetails(this.state.details);
    }
  };

  render() {
    return (
      <div className="form">
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
        <form autoComplete="off" id="detailsForm">
          <div
            id="inputs"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="firstNameInput"
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
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name*"
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
            <div id="surnameInput" className="inputDiv">
              <input
                className="inputs"
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.handleChange}
                placeholder="Surname*"
                autoComplete="off"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
              <div className="upwardSlide" />
            </div>
            <div id="jobTitleInput" className="inputDiv">
              <input
                className="inputs"
                type="text"
                name="jobTitle"
                value={this.state.jobTitle}
                onChange={this.handleChange}
                placeholder="Job Title*"
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
            <div
              id="companyNameInput"
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
                name="companyName"
                value={this.state.companyName}
                onChange={this.handleChange}
                placeholder="Company Name*"
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
            <button
              id="submitForm"
              onClick={this.handleSubmit}
              disabled={this.props.panelProperties.disabled}
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              Start your journey
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DetailsForm;
