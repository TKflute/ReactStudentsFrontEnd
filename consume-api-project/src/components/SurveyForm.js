import React, {Component} from 'react';
import './form.css';
import { createStudent } from '../service/StudentService';

class SurveyForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: -1,
            firstName: '',
            lastName: '',
            email: '',
            department: '',
            imageURL: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: value});
    }

    handleChange2(event){
        this.setState({lastName: event.target.value});
    }

    handleSubmit(event){
        alert('Form submitted!');

        // do your call to post this information (maybe) or update something w/ an API
        
        const student = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            department: this.state.department, 
            imageURL: this.state.imageURL
        }
        
        createStudent(student);
        event.preventDefault();
    }

    render(){
        return(
            <div className="form-style">
                {/* make empy JSON student as this.state
                    as do event.target.value, build a student obj
                    inside handlesubmit, pass student object through axios
                 */}

                <h3>Student Form</h3>

                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className="form-control" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" name="email" id="lastName" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <input type="text" className="form-control" name="department" id="department" value={this.state.department} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Image URL:</label>
                        <input type="text" className="form-control" name="imageURL" id="lastName" value={this.state.imageURL} onChange={this.handleChange}/>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SurveyForm;