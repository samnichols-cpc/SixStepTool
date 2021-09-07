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
    if (this.state.details.companyName.length == 0) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          companyName: "This is a required field",
        },
      }));
    }
    if (this.state.details.jobTitle.length == 0) {
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
      setTimeout(() => {
        this.props.updateDetails(this.state.details);
      }, 50);
    }
  };

  render() {
    return (
      <form>
        <div id="header">
          <div id="titleDiv">
            <div id="title">
              <h1>
                Find out where your location is on its innovation journey.
              </h1>
              <div id="titleDownwardSlide" />
            </div>
          </div>
          <div id="descriptionDiv">
            <p id="description">
              If you lead or are involved in a particular neighbourhood or place
              that is or can become a hub of innovation. In three simple steps
              we will assess where you are up to, and discover what priorities
              may lie ahead!
            </p>
          </div>
        </div>
        <div id="inputs">
          <div id="firstNameInput" className="inputDiv">
            <input
              className="inputs"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name*"
            />
            <div className="upwardSlide" />
          </div>
          <div id="surnameInput" className="inputDiv">
            <input
              className="inputs"
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
              placeholder="Surname*"
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
            />
            <div className="upwardSlide" />
          </div>
          <div id="companyNameInput" className="inputDiv">
            <input
              className="inputs"
              type="text"
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
              placeholder="Company Name*"
            />
            <div className="upwardSlide" />
          </div>
          <button id="submitForm" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default DetailsForm;
