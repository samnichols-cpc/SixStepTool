import React from "react";
import Panel from "./Panel";
import DetailsForm from "./DetailsForm";
import ScrollingPanel from "./ScrollingPanel";

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
        position: 1,
        question: -5,
        visible: true,
      },
      panel3: {
        position: 2,
        question: -4,
        visible: false,
      },
    };
  }

  history = [-2];

  updateDetails = (details) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        details,
      };
    });
  };

  updateHistory = (oldPage) => {
    this.history.push(oldPage);
  };

  setNextQuestion = (nextQuestion) => {
    if (typeof nextQuestion == "string") {
      this.setState({ level: parseInt(nextQuestion[1]) });
      this.setNextQuestion(-3);
      return;
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
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel1: {
              position: 0,
              question: prevState.panel1.question,
              visible: false,
            },
          };
        });
      }, 2000);
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
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel2: {
              position: 0,
              question: prevState.panel2.question,
              visible: false,
            },
          };
        });
      }, 2000);
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
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel3: {
              position: 0,
              question: prevState.panel3.question,
              visible: false,
            },
          };
        });
      }, 2000);
    }
  };

  goBackQuestion = () => {
    if (this.history.length == 0) {
      //Alert the user that they cant go back
      this.setState((prevState) => {
        return { details: { ...prevState.details, completed: false } };
      });
    } else {
      this.history.pop();
    }
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
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel1: {
              position: 2,
              question: prevState.panel1.question,
              visible: false,
            },
          };
        });
      }, 2000);
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
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel2: {
              position: 2,
              question: prevState.panel2.question,
              visible: false,
            },
          };
        });
      }, 2000);
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

      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel3: {
              position: 2,
              question: prevState.panel3.question,
              visible: false,
            },
          };
        });
      }, 2000);
    }
  };

  render() {
    return (
      <div>
        <div>
          <ScrollingPanel panelProperties={this.state.panel1}>
            <Panel
              details={this.state.details}
              panelProperties={this.state.panel1}
              setNextQuestion={this.setNextQuestion}
              goBackQuestion={this.goBackQuestion}
              updateDetails={this.updateDetails}
              updateHistory={this.updateHistory}
            />
          </ScrollingPanel>
          <ScrollingPanel panelProperties={this.state.panel2}>
            <Panel
              details={this.state.details}
              panelProperties={this.state.panel2}
              setNextQuestion={this.setNextQuestion}
              goBackQuestion={this.goBackQuestion}
              updateDetails={this.updateDetails}
              updateHistory={this.updateHistory}
            />
          </ScrollingPanel>
          <ScrollingPanel panelProperties={this.state.panel3}>
            <Panel
              details={this.state.details}
              panelProperties={this.state.panel3}
              setNextQuestion={this.setNextQuestion}
              goBackQuestion={this.goBackQuestion}
              updateDetails={this.updateDetails}
              updateHistory={this.updateHistory}
            />
          </ScrollingPanel>
        </div>
      </div>
    );
  }
}

export default App;
