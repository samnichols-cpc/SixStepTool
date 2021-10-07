import React from "react";
import Panel from "./Panel";
import ResultsPage from "./ResultsPage";
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
        disabled: true,
      },
      panel2: {
        position: 1,
        question: -5,
        visible: true,
        disabled: false,
      },
      panel3: {
        position: 2,
        question: -4,
        visible: false,
        disabled: true,
      },
      showResults: false,
    };
  }

  history = [-5];

  showResults = () => {
    this.setState({ showResults: true });
  };

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
    if (typeof nextQuestion === "string") {
      this.setState({ level: parseInt(nextQuestion[1]) });
      this.setNextQuestion(-3);
      return;
    }
    this.history.push(nextQuestion);
    if (this.state.panel1.position === 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 0,
            question: prevState.panel1.question,
            visible: true,
            disabled: true,
          },
          panel2: {
            position: 1,
            question: nextQuestion,
            visible: true,
            disabled: true,
          },
          panel3: {
            position: 2,
            question: prevState.panel3.question,
            visible: false,
            disabled: true,
          },
        };
      });
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel1: {
              ...prevState.panel1,
              visible: false,
            },
            panel2: {
              ...prevState.panel2,
              disabled: false,
            },
          };
        });
      }, 2000);
    } else if (this.state.panel2.position === 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 2,
            question: prevState.panel1.question,
            visible: false,
            disabled: true,
          },
          panel2: {
            position: 0,
            question: prevState.panel2.question,
            visible: true,
            disabled: true,
          },
          panel3: {
            position: 1,
            question: nextQuestion,
            visible: true,
            disabled: true,
          },
        };
      });
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel2: {
              ...prevState.panel2,
              visible: false,
            },
            panel3: {
              ...prevState.panel3,
              disabled: false,
            },
          };
        });
      }, 2000);
    } else if (this.state.panel3.position === 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 1,
            question: nextQuestion,
            visible: true,
            disabled: true,
          },
          panel2: {
            position: 2,
            question: prevState.panel2.question,
            visible: false,
            disabled: true,
          },
          panel3: {
            position: 0,
            question: prevState.panel3.question,
            visible: true,
            disabled: true,
          },
        };
      });
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel3: {
              ...prevState.panel3,
              visible: false,
            },
            panel1: {
              ...prevState.panel1,
              disabled: false,
            },
          };
        });
      }, 2000);
    }
  };

  goBackQuestion = () => {
    if (this.history.length === 0) {
      //Alert the user that they cant go back
      this.setState((prevState) => {
        return { details: { ...prevState.details, completed: false } };
      });
    } else {
      this.history.pop();
    }
    if (this.state.panel1.position === 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 2,
            question: prevState.panel1.question,
            visible: true,
            disabled: true,
          },
          panel2: {
            position: 0,
            question: prevState.panel2.question,
            visible: false,
            disabled: true,
          },
          panel3: {
            position: 1,
            question: this.history[this.history.length - 1],
            visible: true,
            disabled: true,
          },
        };
      });
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel1: {
              ...prevState.panel1,
              visible: false,
            },
            panel3: {
              ...prevState.panel3,
              disabled: false,
            },
          };
        });
      }, 2000);
    } else if (this.state.panel2.position === 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 1,
            question: this.history[this.history.length - 1],
            visible: true,
            disabled: true,
          },
          panel2: {
            position: 2,
            question: prevState.panel2.question,
            visible: true,
            disabled: true,
          },
          panel3: {
            position: 0,
            question: prevState.panel3.question,
            visible: false,
            disabled: true,
          },
        };
      });
      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel2: {
              ...prevState.panel2,
              visible: false,
            },
            panel1: {
              ...prevState.panel1,
              disabled: false,
            },
          };
        });
      }, 2000);
    } else if (this.state.panel3.position === 1) {
      this.setState((prevState) => {
        return {
          panel1: {
            position: 0,
            question: prevState.panel1.question,
            visible: false,
            disabled: true,
          },
          panel2: {
            position: 1,
            question: this.history[this.history.length - 1],
            visible: true,
            disabled: true,
          },
          panel3: {
            position: 2,
            question: prevState.panel3.question,
            visible: true,
            disabled: true,
          },
        };
      });

      setTimeout(() => {
        this.setState((prevState) => {
          return {
            panel3: {
              ...prevState.panel3,
              visible: false,
            },
            panel2: {
              ...prevState.panel2,
              disabled: false,
            },
          };
        });
      }, 2000);
    }
  };

  render() {
    if (this.state.showResults) {
      return (
        <ResultsPage details={this.state.details} level={this.state.level} />
      );
    }
    return (
      <div id="sst_background">
        <ScrollingPanel panelProperties={this.state.panel1}>
          <Panel
            details={this.state.details}
            panelProperties={this.state.panel1}
            setNextQuestion={this.setNextQuestion}
            goBackQuestion={this.goBackQuestion}
            updateDetails={this.updateDetails}
            updateHistory={this.updateHistory}
            showResults={this.showResults}
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
            showResults={this.showResults}
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
            showResults={this.showResults}
          />
        </ScrollingPanel>
      </div>
    );
  }
}

export default App;
