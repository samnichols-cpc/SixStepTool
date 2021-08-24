import React from "react"

const positions = [-31,35,101]

const questions = [
    {title:"1", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"2", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"3", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"4", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"5", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"6", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"7", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"8", answers:[["a",1],["b",2],["c",3],["d",4]]},
    {title:"9", answers:[["a",1],["b",2],["c",3],["d",4]]},
]


class QuestionPanel extends React.Component{
    render(){
        return (
            <div id="slideable" style={{left:positions[this.props.panelProperties.position]+"%",visibility:(this.props.panelProperties.visible ? "visible":"hidden")}}>
                <h1 style={{visibility:(this.props.panelProperties.visible ? "visible":"hidden")}}>{questions[this.props.panelProperties.question].title}</h1>
                {questions[this.props.panelProperties.question].answers.map((answer, i) => {     
                    return (<button key={i} onClick={() => this.props.setNextQuestion(answer[1])}style={{visibility:(this.props.panelProperties.visible ? "visible":"hidden")}}>{answer[0]}</button>) 
                })}
            </div>  
        )
    }
}

export default QuestionPanel