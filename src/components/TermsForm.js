import React from "react";

class TermsForm extends React.Component {
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
        sst_terms: false,
        sst_updates: false,
      },
      errors: {
        firstName: "",
        surname: "",
        companyName: "",
        jobTitle: "",
        email: "",
        sst_terms: "",
      },
    };
  }

  toggleCheck = (event) => {
    this.setState((prevState) => {
      return {
        details: {
          ...prevState.details,
          [event.target.id]: !prevState.details[event.target.id],
        },
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.details.sst_terms == false) {
      this.setState((prevState) => {
        return {
          errors: {
            ...prevState.errors,
            sst_terms: "Terms need to be accepted to get results",
          },
        };
      });
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      errors: { ...prevState.errors, surname: "" },
    }));
    this.props.showResults();
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
        <form autoComplete="off">
          <div
            id="sst_emailInputs"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <h5>Tool Usage</h5>
            <p>
              Connected Places Catapult will collect, store and process the data
              requrested within this tool for commercial and marketing purposes
              in line with our data protection and privacy policies.
            </p>
            <p style={{ fontWeight: "bold" }}>
              We will always treat your personal data with the utmost care and
              never sell it to third parties.
              <br /> You are also welcome to unsubscribe at any time.
            </p>
            <p id="sst_consent">
              Do you consent for your personal data to be collected and
              processed by Connected Places Catapult
              <br />
              (Please click to confirm)
            </p>
            <div className="sst_termsTick" onClick={this.toggleCheck}>
              <div className="sst_tickableTerm" id="sst_terms">
                <i
                  className="sst_ui icon check"
                  id="sst_terms"
                  style={{
                    visibility: this.state.details.sst_terms
                      ? "visible"
                      : "hidden",
                  }}
                ></i>
              </div>
              <p>
                I have read the above tool usage section and agree to the
                collection, storage and use by Connected Places Catapult of my
                data for the purpose stated and in accordance with the Connected
                Places Catapult Privacy Policy.
                <span style={{ fontSize: "smaller", color: "red" }}>
                  {this.state.errors.sst_terms}
                </span>
              </p>
            </div>
            <div className="sst_termsTick" onClick={this.toggleCheck}>
              <div className="sst_tickableTerm" id="sst_updates">
                <i
                  className="sst_ui icon check"
                  id="sst_updates"
                  style={{
                    visibility: this.state.details.sst_updates
                      ? "visible"
                      : "hidden",
                  }}
                ></i>
              </div>
              <p>
                Would you like updates, news and events from Connected Places
                Catapult?
              </p>
            </div>
            <button
              id="sst_submitTermsForm"
              onClick={this.handleSubmit}
              disabled={this.props.panelProperties.disabled}
              style={{
                visibility: this.props.panelProperties.visible
                  ? "visible"
                  : "hidden",
              }}
            >
              Get Your Results
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TermsForm;
