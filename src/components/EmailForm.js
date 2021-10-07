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
        confirmEmail: "",
      },
      errors: {
        firstName: "",
        surname: "",
        companyName: "",
        jobTitle: "",
        email: "",
        confirmEmail: "",
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
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    let inputsValid = true;
    if (!emailRegex.test(this.state.details.email)) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, email: "Input is not valid" },
      }));
    } else
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, email: "" },
      }));
    if (
      this.state.details.email.toLowerCase() !=
      this.state.details.confirmEmail.toLowerCase()
    ) {
      inputsValid = false;
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, confirmEmail: "Email does not match" },
      }));
    } else
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, confirmEmail: "" },
      }));

    return inputsValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkInputs()) {
      this.props.setNextQuestion(-2);
      this.props.updateDetails(this.state.details);
    }
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
        <form autoComplete="off" id="sst_emailForm">
          <div
            id="sst_emailInputs"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div
              id="sst_emailInput"
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
                name="email"
                value={this.state.details.email}
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
                className="sst_upwardSlide"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
              <p className="sst_errors">{this.state.errors.email}</p>
            </div>
            <div id="sst_confirmEmailInput" className="sst_inputDiv">
              <input
                className="sst_inputs"
                type="text"
                name="confirmEmail"
                value={this.state.details.confirmEmail}
                onChange={this.handleChange}
                placeholder="Confirm Email*"
                autoComplete="off"
                style={{
                  visibility: this.props.panelProperties.visible
                    ? "visible"
                    : "hidden",
                }}
              />
              <div className="sst_upwardSlide" />
              <p className="sst_errors">{this.state.errors.confirmEmail}</p>
            </div>

            <button
              id="sst_submitForm"
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
      </div>
    );
  }
}

export default EmailForm;
