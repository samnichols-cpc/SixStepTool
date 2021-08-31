import React from "react"

const positions = [-31,35,101]

const questions = [
    {title:"1 Which do you most identify with? \n\t I am:", answers:[["a. Thinking about creating a hub of innovation (1)",1],["b. An early stage district or hub (2-3)",1],["c. A well established home of innovative companies and institutions (3-6)",2]]},
    {title:"2a Which of these is your biggest priority in your hub of innovation at the moment?", answers:[["a. Agreeing with partners what/where the innovation play really is in our region (1)",3],["b. Working out our location's USP and assessing what our innovation assets are capable of (2)",3],["c. Building a coalition for development, investment and placemaking in the area (3)",4],["d. Attracting larger tenants and institutions, building international profile,  (4)",4]]},
    {title:"2b Which of these is your biggest priority in your hub of innovation at the moment?", answers:[["a. Developing and improving our key sites, building our reputation (3)",4],["b. Reinventing the physical and social environment of our location to make it fit for what future talent and businesses need  (3)",4],["c.  Strengthening the existing governance model (4)",4],["d. Making sure our current growth and scale delivers inclusive long term success (5)",5],["e. Ensuring more people have a chance to share in our global leadership, and finding ways to grow 'up' or 'out' while retaining our innovative character (6)",6]]},
    {title:"3A True/False:\nI have engaged with regional partners and risk-tolerant investors to understand what the appetite is for a specific innovation location", answers:[["a. True -- I have done this / this is underway","L1"],["b. False -- I haven't done this yet / now is not the right time","L2"]]},
    {title:"3B True/False:\nWe have a clear idea what the baseline, benchmarks, and targets are for this specific location", answers:[["a. True (4)","L3"],["b. False -- the project has buy-in but we are not yet quite sure what success looks like (3)",5]]},
    {title:"3C True/False:\nWe are ready to invest in strategies to connect the innovation community and improve the place's connectivity", answers:[["a. True (4)","L4"],["b. False -- we are not ready for this (3)","L3"],["c. False -- we already have built a lot of community-building capacity (5)",6]]},
    {title:"3D True/False:\nWe are ready to provide services and benefits beyond our immediate boundaries, and work toward bigger solutions on infrastructure, housing and inclusion", answers:[["a. True (6)","L5"],["b. False -- we'd love to do this but not yet ready (5)","L6"]]},
    {title:"",answers:[["",0]]}

]


class QuestionPanel extends React.Component{
    render(){
        return (
            <div id="slideable" style={{top:positions[this.props.panelProperties.position]+"%",visibility:(this.props.panelProperties.visible ? "visible":"hidden")}}>
                <div>
                    <button  id="back" className="ui inverted primary button" onClick={this.props.goBackQuestion} style={{visibility:(this.props.panelProperties.visible ? "visible":"hidden")}}>Back</button>
                    <h1 id="question" style={{visibility:(this.props.panelProperties.visible ? "visible":"hidden"), textAlign: "center"}}>{questions[this.props.panelProperties.question].title}</h1>
                </div>
                {questions[this.props.panelProperties.question].answers.map((answer, i) => {     
                    return (<button id="answer" className="ui inverted primary button" key={i} onClick={() => this.props.setNextQuestion(answer[1])}style={{visibility:(this.props.panelProperties.visible ? "visible":"hidden")}}>{answer[0]}</button>) 
                })}
            </div>  
        )
    }
}

export default QuestionPanel