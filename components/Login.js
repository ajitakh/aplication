import ReactSignupLoginComponent from 'react-signup-login-component';
import React from 'react';

    const LoginPage = (props) => {
        const signupWasClickedCallback = (data) => {
            console.log(data);
            alert('Signup callback, see log on the console to see the data.');
        };
        const loginWasClickedCallback = (data) => {
            console.log(data);
            alert('Login callback, see log on the console to see the data.');
        };
        const recoverPasswordWasClickedCallback = (data) => {
            console.log(data);
            alert('Recover password callback, see log on the console to see the data.');
        };
        return (
            <div>
                <ReactSignupLoginComponent
                    title="Account Registration"
                    handleSignup={signupWasClickedCallback}
                    handleLogin={loginWasClickedCallback}
                    handleRecoverPassword={recoverPasswordWasClickedCallback}
                />
            </div>
        );
    };


export default
    LoginPage;

/*export default class LoginPage extends React.Component {
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

 <h2> Account Registration</h2>
 <form onSubmit={this.onSubmit}>
 <input type="text" placeholder="Name" ref="name"/> <br/>
 <input type="text" placeholder="e-mail" ref="email"/><br/>
 <input type="text" placeholder="citizenship number" ref="citizen"/> <br/>
 <input type="text" placeholder="address" ref="dist"/>

 <br/>
 <input type="text" placeholder="Password" ref="pass"/> <br/>
 <input type="text" placeholder=" Re-type Password" ref="repass"/> <br/>

 <input type="submit"/>
 </form>
 </div>







 );
 }
 }*/
