import React from "react";
import DetailsForm from "./DetailsForm";
import LocationForm from "./LocationForm";

const questions = [
  {
    number: "1",
    title: "Which do you most identify with? \n\t I am:",
    answers: [
      ["a. Thinking about creating a hub of innovation (1)", 1],
      ["b. An early stage district or hub (2-3)", 1],
      [
        "c. A well established home of innovative companies and institutions (3-6)",
        2,
      ],
    ],
  },
  {
    number: "2a",
    title:
      "Which of these is your biggest priority in your hub of innovation at the moment?",
    answers: [
      [
        "a. Agreeing with partners what/where the innovation play really is in our region (1)",
        3,
      ],
      [
        "b. Working out our location's USP and assessing what our innovation assets are capable of (2)",
        3,
      ],
      [
        "c. Building a coalition for development, investment and placemaking in the area (3)",
        4,
      ],
      [
        "d. Attracting larger tenants and institutions, building international profile,  (4)",
        4,
      ],
    ],
  },
  {
    number: "2b",
    title:
      "Which of these is your biggest priority in your hub of innovation at the moment?",
    answers: [
      [
        "a. Developing and improving our key sites, building our reputation (3)",
        4,
      ],
      [
        "b. Reinventing the physical and social environment of our location to make it fit for what future talent and businesses need  (3)",
        4,
      ],
      ["c.  Strengthening the existing governance model (4)", 4],
      [
        "d. Making sure our current growth and scale delivers inclusive long term success (5)",
        5,
      ],
      [
        "e. Ensuring more people have a chance to share in our global leadership, and finding ways to grow 'up' or 'out' while retaining our innovative character (6)",
        6,
      ],
    ],
  },
  {
    number: "3a",
    title:
      "True/False:\nI have engaged with regional partners and risk-tolerant investors to understand what the appetite is for a specific innovation location",
    answers: [
      ["a. True -- I have done this / this is underway", "L1"],
      ["b. False -- I haven't done this yet / now is not the right time", "L2"],
    ],
  },
  {
    number: "3b",
    title:
      "True/False:\nWe have a clear idea what the baseline, benchmarks, and targets are for this specific location",
    answers: [
      ["a. True (4)", "L3"],
      [
        "b. False -- the project has buy-in but we are not yet quite sure what success looks like (3)",
        5,
      ],
    ],
  },
  {
    number: "3c",
    title:
      "True/False:\nWe are ready to invest in strategies to connect the innovation community and improve the place's connectivity",
    answers: [
      ["a. True (4)", "L4"],
      ["b. False -- we are not ready for this (3)", "L3"],
      [
        "c. False -- we already have built a lot of community-building capacity (5)",
        6,
      ],
    ],
  },
  {
    number: "3d",
    title:
      "True/False:\nWe are ready to provide services and benefits beyond our immediate boundaries, and work toward bigger solutions on infrastructure, housing and inclusion",
    answers: [
      ["a. True (6)", "L5"],
      ["b. False -- we'd love to do this but not yet ready (5)", "L6"],
    ],
  },
  { title: "", answers: [["", 0]] },
];

class Panel extends React.Component {
  render() {
    if (this.props.panelProperties.question == -2)
      return (
        <DetailsForm
          panelProperties={this.props.panelProperties}
          updateDetails={this.props.updateDetails}
          updateHistory={this.props.updateHistory}
          setNextQuestion={this.props.setNextQuestion}
        />
      );

    if (this.props.panelProperties.question == -1)
      return (
        <LocationForm
          panelProperties={this.props.panelProperties}
          details={this.props.details}
          goBackQuestion={this.props.goBackQuestion}
          updateHistory={this.props.updateHistory}
          setNextQuestion={this.props.setNextQuestion}
        />
      );
    return (
      <div>
        <div
          id="questionHeader"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
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
          id="questionContent"
          style={{
            visibility: this.props.panelProperties.visible
              ? "visible"
              : "hidden",
          }}
        >
          <div
            id="questionTitle"
            style={{
              visibility: this.props.panelProperties.visible
                ? "visible"
                : "hidden",
            }}
          >
            <div id="questionNumber">
              {questions[this.props.panelProperties.question].number}
            </div>
            <div id="questionText">
              {questions[this.props.panelProperties.question].title}
            </div>
          </div>
          {questions[this.props.panelProperties.question].answers.map(
            (answer, i) => {
              return (
                <div
                  id="answer"
                  className="answers"
                  key={i}
                  onClick={() => this.props.setNextQuestion(answer[1])}
                  style={{
                    visibility: this.props.panelProperties.visible
                      ? "visible"
                      : "hidden",
                    height:
                      60 /
                        questions[this.props.panelProperties.question].answers
                          .length +
                      "%",
                    backgroundColor: "#e2e2e2",
                    position: "absolute",
                    borderRadius: "10px",
                    width: "90%",
                    margin: "0",
                    left: "5%",
                    cursor: "pointer",
                    padding: "5px",
                    top:
                      30 +
                      i *
                        (60 /
                          questions[this.props.panelProperties.question].answers
                            .length +
                          10 /
                            questions[this.props.panelProperties.question]
                              .answers.length) +
                      "%",
                  }}
                >
                  {answer[0]}
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default Panel;
