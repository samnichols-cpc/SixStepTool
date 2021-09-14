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
        question: -2,
        visible: true,
      },
      panel3: {
        position: 2,
        question: -1,
        visible: false,
      },
    };
  }

  history = [-2];

  updateDetails = (details) => {
    this.setState((prevState) => {
      return {
        details,
        panel1: {
          position: 2,
          question: prevState.panel1.question,
          visible: false,
        },
        panel2: { position: 0, question: -2, visible: true },
        panel3: {
          position: 1,
          question: -1,
          visible: true,
        },
      };
    });
    // setTimeout(() => {
    //   this.setFirstQuestion(0);
    // }, 100);
  };

  updateHistory = (oldPage) => {
    this.history.push(oldPage);
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
    console.log(this.state);
    return (
      <div>
        {this.state.level == 0 ? (
          <div>
            <ScrollingPanel panelProperties={this.state.panel1}>
              <Panel
                details={this.state.details}
                panelProperties={this.state.panel1}
                setNextQuestion={this.setNextQuestion}
                goBackQuestion={this.goBackQuestion}
                setFirstQuestion={this.setFirstQuestion}
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
                setFirstQuestion={this.setFirstQuestion}
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
                setFirstQuestion={this.setFirstQuestion}
                updateDetails={this.updateDetails}
                updateHistory={this.updateHistory}
              />
            </ScrollingPanel>
          </div>
        ) : (
          <h1>{`You will recieve an email telling you your organisation is Level ${this.state.level}`}</h1>
        )}
      </div>
    );
  }
}

export default App;
