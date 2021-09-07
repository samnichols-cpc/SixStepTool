import React from "react";
import QuestionPanel from "./QuestionPanel";
import DetailsForm from "./DetailsForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      level: 0,
      details: {
        completed: false,
        firstName: "",
        surname: "",
        companyName: "",
        jobTitle: "",
        email: "",
      },
      panel1: {
        position: 0,
        question: 0,
        visible: true,
      },
      panel2: {
        position: 0,
        question: 0,
        visible: true,
      },
      panel3: {
        position: 2,
        question: 0,
        visible: true,
      },
    };
  }

  history = [];

  updateDetails = (details) => {
    this.setState({ details });
    setTimeout(() => {
      this.setFirstQuestion(0);
    }, 100);
  };

  setFirstQuestion = () => {
    this.history.push(0);
    this.setState((prevState) => {
      return {
        panel1: {
          position: 2,
          question: prevState.panel1.question,
          visible: false,
        },
        panel2: { position: 0, question: 0, visible: true },
        panel3: {
          position: 1,
          question: prevState.panel3.question,
          visible: true,
        },
      };
    });
  };

  setNextQuestion = (nextQuestion) => {
    if (typeof nextQuestion == "string") {
      this.setState({ level: parseInt(nextQuestion[1]) });
    }
    this.history.push(nextQuestion);
    if (this.state.panel1.position == 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 0,
            question: prevState.panel1.question,
            visible: true,
          },
          panel2: { position: 1, question: nextQuestion, visible: true },
          panel3: {
            position: 2,
            question: prevState.panel3.question,
            visible: false,
          },
        };
      });
    } else if (this.state.panel2.position == 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 2,
            question: prevState.panel1.question,
            visible: false,
          },
          panel2: {
            position: 0,
            question: prevState.panel2.question,
            visible: true,
          },
          panel3: { position: 1, question: nextQuestion, visible: true },
        };
      });
    } else if (this.state.panel3.position == 1) {
      this.setState((prevState) => {
        return {
          panel1: { position: 1, question: nextQuestion, visible: true },
          panel2: {
            position: 2,
            question: prevState.panel2.question,
            visible: false,
          },
          panel3: {
            position: 0,
            question: prevState.panel3.question,
            visible: true,
          },
        };
      });
    }
  };

  goBackQuestion = () => {
    if (this.history.length == 1) {
      //Alert the user that they cant go back
      return null;
    }
    this.history.pop();
    if (this.state.panel1.position == 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 2,
            question: prevState.panel1.question,
            visible: true,
          },
          panel2: {
            position: 0,
            question: prevState.panel2.question,
            visible: false,
          },
          panel3: {
            position: 1,
            question: this.history[this.history.length - 1],
            visible: true,
          },
        };
      });
    } else if (this.state.panel2.position == 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 1,
            question: this.history[this.history.length - 1],
            visible: true,
          },
          panel2: {
            position: 2,
            question: prevState.panel2.question,
            visible: true,
          },
          panel3: {
            position: 0,
            question: prevState.panel3.question,
            visible: false,
          },
        };
      });
    } else if (this.state.panel3.position == 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 0,
            question: prevState.panel1.question,
            visible: false,
          },
          panel2: {
            position: 1,
            question: this.history[this.history.length - 1],
            visible: true,
          },
          panel3: {
            position: 2,
            question: prevState.panel3.question,
            visible: true,
          },
        };
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.level == 0 ? (
          this.state.details.completed ? (
            <div>
              <QuestionPanel
                panelProperties={this.state.panel1}
                setNextQuestion={this.setNextQuestion}
                goBackQuestion={this.goBackQuestion}
              />
              <QuestionPanel
                panelProperties={this.state.panel2}
                setNextQuestion={this.setNextQuestion}
                goBackQuestion={this.goBackQuestion}
              />
              <QuestionPanel
                panelProperties={this.state.panel3}
                setNextQuestion={this.setNextQuestion}
                goBackQuestion={this.goBackQuestion}
              />
            </div>
          ) : (
            <DetailsForm updateDetails={this.updateDetails} />
          )
        ) : (
          <h1>{`You will recieve an email telling you your organisation is Level ${this.state.level}`}</h1>
        )}
      </div>
    );
  }
}

export default App;
