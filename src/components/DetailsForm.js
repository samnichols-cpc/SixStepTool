import React from 'react'

class DetailsForm extends React.Component{
    constructor(){
        super()

        this.state = {
            details:{
                completed:false,
                firstName:"",
                lastName:"",
                companyName:"",
                jobTitle:"",
                email:""
            },
            errors:{
                firstName:"",
                lastName:"",
                companyName:"",
                jobTitle:"",
                email:""
            }
        }
    }

    handleChange = (event) => {
        this.setState((prevState) => ({details:{...prevState.details,[event.target.name]:event.target.value}}))
    }

    checkInputs = () =>{
        const firstNameRegex = new RegExp('^[a-z,.\'-]+$', 'i')
        const lastNameRegex = new RegExp('^[a-z,.\'-]+$', 'i')

        let inputsValid = true;
        if (!firstNameRegex.test(this.state.details.firstName)){
            inputsValid = false;
            this.setState((prevState) => ({...prevState, errors:{...prevState.errors, firstName:"Input is not valid"}}))
        }
        if (!lastNameRegex.test(this.state.details.lastName)){
            inputsValid = false;
            this.setState((prevState) => ({...prevState, errors:{...prevState.errors, lastName:"Input is not valid"}}))
        }
        if(this.state.details.companyName.length == 0){
            inputsValid = false;
            this.setState((prevState) => ({...prevState, errors:{...prevState.errors, companyName:"This is a required field"}}))
        }
        if(this.state.details.jobTitle.length == 0){
            inputsValid = false;
            this.setState((prevState) => ({...prevState, errors:{...prevState.errors, jobTitle:"This is a required field"}}))
        }
        this.setState((prevState) => ({...prevState,details:{...prevState.details, completed:inputsValid} }))

        return inputsValid

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.checkInputs()){
            setTimeout(() => {this.props.updateDetails(this.state.details)}, 50)
            
        }
    }
    
    render(){
        return(
            <form>
                <label>First Name</label>
                <input type="text" name="firstName"value={this.state.firstName} onChange={this.handleChange}></input>
                <label>Last Name</label>
                <input type="text" name="lastName"value={this.state.lastName} onChange={this.handleChange}></input>
                <label>Company Name</label>
                <input type="text" name="companyName"value={this.state.companyName} onChange={this.handleChange}></input>
                <label>Job Role</label>
                <input type="text" name="jobTitle"value={this.state.jobTitle} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        
        )
    }
}

export default DetailsForm