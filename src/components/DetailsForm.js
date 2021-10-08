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
    } else
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, firstName: "" },
      }));
    if (!surnameRegex.test(this.state.details.surname)) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, surname: "Input is not valid" },
      }));
    } else
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, surname: "" },
      }));
    if (this.state.details.companyName.length === 0) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          companyName: "This is a required field",
        },
      }));
    } else
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, companyName: "" },
      }));
    if (this.state.details.jobTitle.length === 0) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, jobTitle: "This is a required field" },
      }));
    } else
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, jobTitle: "" },
      }));
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
    console.log(this.state);
  };

  render() {
    return (
      <div className="sst_form">
        <div
          id="sst_header"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
          <div
            id="sst_titleDiv"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="sst_title"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  padding: "10px",
                  fontSize: "22pt",
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              >
                Find out where your location is on its innovation journey.
              </div>
              <div
                id="sst_titleDownwardSlide"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
            </div>
          </div>
          <div
            id="sst_descriptionDiv"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="sst_description"
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
            </div>
          </div>
        </div>
        <div autoComplete="off" id="sst_detailsForm">
          <div
            id="sst_inputs"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="sst_firstNameInput"
              className="sst_inputDiv"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <input
                className="sst_inputs"
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
                className="sst_upwardSlide"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
              <div className="sst_errors">{this.state.errors.firstName}</div>
            </div>
            <div id="sst_surnameInput" className="sst_inputDiv">
              <input
                className="sst_inputs"
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
              <div className="sst_upwardSlide" />
              <div className="sst_errors">{this.state.errors.surname}</div>
            </div>
            <div id="sst_jobTitleInput" className="sst_inputDiv">
              <input
                className="sst_inputs"
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
                className="sst_upwardSlide"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
              <div className="sst_errors">{this.state.errors.jobTitle}</div>
            </div>
            <div
              id="sst_companyNameInput"
              className="sst_inputDiv"
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              <input
                className="sst_inputs"
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
                className="sst_upwardSlide"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
              <div className="sst_errors">{this.state.errors.companyName}</div>
            </div>
            <button
              id="sst_submitForm"
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
        </div>
      </div>
    );
  }
}

export default DetailsForm;
