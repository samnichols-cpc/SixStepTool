import React from "react"
import QuestionPanel from "./QuestionPanel"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            panel1:{
                position:1,
                question:0,
                visible:true
            },
            panel2:{
                position:0,
                question:0,
                visible:true
            }
        }
    }


    setNextQuestion = (nextQuestion) =>{
        console.log(nextQuestion)
        if(this.state.panel1.position == 1){
            this.setState((prevState)=> {
                return {
                    panel2: {position:1, question:nextQuestion, visible:true},
                    panel1: {position:2, question:prevState.panel1.question, visible:true}
                }
            })
            setTimeout((prevState)=>{
                this.setState((prevState) => ({panel1:{position:0, question:prevState.panel1.question, visible:false}}))
            },2000)
        }else if(this.state.panel2.position == 1){
            this.setState((prevState)=> {
                return {
                    panel1: {position:1, question:nextQuestion, visible:true},
                    panel2: {position:2, question:prevState.panel2.question, visible:true}
                }
            })
            setTimeout(()=>{
                this.setState((prevState) => ({panel2:{position:0, question:prevState.panel2.question, visible:false}}))
            },2000)
        }        
    }

    render(){
        
        return(
            <div>
                <QuestionPanel panelProperties={this.state.panel1} setNextQuestion={this.setNextQuestion}/>
                <QuestionPanel panelProperties={this.state.panel2} setNextQuestion={this.setNextQuestion}/>   
            </div>
        )
    }
}

export default App