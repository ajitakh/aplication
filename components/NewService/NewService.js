
import React from 'react';
import HeaderBar from '../components/header-bar/header-bar';
import NavigationMenu from '../components/navigation-menu';

import LoginPage from '../Login.js';
import Buttons from "../loginButton.js";

export default class service extends React.Component {
    constructor() {
        super();
        this.state = { user: {} };
        this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var self = this;
        // On submit of the form, send a POST request with the data to the server.
        fetch('/users', {
            method: 'POST',
            data: {
                name: self.refs.name,
                job: self.refs.email

            }
        })
            .then(function(response) {
                return response.json()
            }).then(function(body) {
            console.log(body);
        });
    }

    render() {
        return (
                <div>
                    <div className="row">
                        <HeaderBar/>
                    </div>
                    <div className="row">
                        <NavigationMenu/>


                        <div className="content-wrapper" >
                            <div style={ { content: "left: 50px; top: 0; width: 50px"}}>
                                <h2> New Service Registration</h2>
                                <form onSubmit={this.onSubmit}>
                                    <input type="text" placeholder="Name" ref="name"/> <br/>
                                    <input type="text" placeholder="e-mail" ref="email"/><br/>
                                    <input type="text" placeholder="citizenship number" ref="citizen"/> <br/>
                                   Address: <input type="text" placeholder="district" ref="dist"/>
                                    <input type="text" placeholder="zone" ref="zone"/>
                                    <input type="text" placeholder="locality" ref="local"/>
                                    <input type="text" placeholder="house_no" ref="house_no"/>

                                    <br/>
                                    Service Required for: <input type='radio' name='type' id='2' value='household' checked={this.state.type === 'industry'}/>
                                    <label htmlFor='house'>Industry</label>

                                    <input type='radio' name='type' id='1' value='household' checked={this.state.type === 'house'}/>
                                    <label htmlFor='house'>Household</label> <br/>

                                    Power Required: <select>
                                    <option value="1">5 Amp</option>
                                    <option value="2">10 Amp</option>
                                    <option value="3">15 Amp</option>
                                    <option value="4">>15 Amp </option>
                                </select><br/>

                                 Meter number of nearest neighbour: <input type= "text"  ref="meter_no"/>
<br/>
                                    estimated distance from main pole:<select>
                                    <option value="1">100m</option>
                                    <option value="2">300m</option>
                                    <option value="3">500m</option>
                                    <option value="4"> more than 500m</option>
                                </select><br/>
                                    <input type="submit"/>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>


        );
    }
}

/*import FormStore from './formStore';
import FormActions from './formAction'

class service extends React.Component {
    constructor(props) {
        super(props);
        this.state = FormStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FormStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FormStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var name = this.state.name.trim();
        var email = this.state.email;
        var gender = this.state.gender;
        var dob = this.state.dob;
        var question = this.state.question;

        if (!name) {
            FormActions.invalidName();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (!email) {
            FormActions.invalidEmail();
            this.refs.nameTextField.getDOMNode().focus();
        }
        if (!gender) {
            FormActions.invalidGender();
        }
        if (!dob) {
            FormActions.invalidDob();
            this.refs.nameTextField.getDOMNode().focus();
        }
        if (!question) {
            FormActions.invalidQuestion();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (name && email && dob && question && gender) {
            var userObj = {
                userName:name,
                gender:gender,
                userEmail:email,
                dateOfBirth:dob,
                question:question
            }
            FormActions.addCharacter(userObj);
        }
    }

    render() {
        return (
            <div className='container container-fluid center-block '>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-body'>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Name</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={FormActions.updateName} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.emailValidationState}>
                                        <label className='control-label'>Email</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.email}
                                               onChange={FormActions.updateEmail} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.genderValidationState}>
                                        <div className='radio radio-inline'>
                                            <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
                                                   onChange={FormActions.updateGender}/>
                                            <label htmlFor='female'>Female</label>
                                        </div>
                                        <div className='radio radio-inline'>
                                            di<input type='rao' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
                                                   onChange={FormActions.updateGender}/>
                                            <label htmlFor='male'>Male</label>
                                        </div>
                                    </div>
                                    <div className={'form-group'}>
                                        <label className='control-label'>DOB</label>
                                        <input type='date' className='form-control' ref='nameTextField' value={this.state.dob}
                                               onChange={FormActions.updateDate} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group'}>
                                        <label className='control-label'>Question</label>
                                        <input type='text-area' className='form-control' ref='nameTextField' value={this.state.question}
                                               onChange={FormActions.updateQuestion} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default service;*/
