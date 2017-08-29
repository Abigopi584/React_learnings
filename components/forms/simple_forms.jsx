import React from 'react';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.submitMyForm = this.submitMyForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.state={
            value:'Enter a Valid Name'
        }
    }
    inputChange(evt){
        this.setState({
            value:evt.target.value
        })
    }
    submitMyForm(evt){
        evt.preventDefault();
        console.log(`The form is being submitted ${this.state.value}`);
    }
    render(){
        return(
            <form onSubmit= {this.submitMyForm} action="/loginForm" method="POST" >
                <div  className="col-md-6">
                    <label htmlFor="name" className="col-md-2"> Name </label>
                    <input type="text" name="name" value={this.state.name}   onChange={this.inputChange} className="col-md-3"/>
                    <br/><br/>
                    <label htmlFor="password" className="col-md-2"> Password </label>
                    <input type="password" name="name" value={this.state.password}   onChange={this.inputChange} className="col-md-3"/>

                </div>

               <div className="col-md-2">
                   <button className="btn btn-default"> SUBMIT </button>
               </div>
            </form>
        )
    }
}
