import { Meteor } from 'meteor/meteor';
import React, { Component } from  'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import {SubmitField} from 'uniforms-bootstrap3';
import LoginSchema from '../../api/users/loginSchema.js';
import { browserHistory, Link } from 'react-router'

export default class LoginForm extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            loginError: null
        };
        this.onSubmit        = this.onSubmit.bind(this);
        this.onSubmitFailure = this.onSubmitFailure.bind(this);
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
    }

    onSubmit({email, password}) {
        return new Promise((resolve, reject) =>
            Meteor.loginWithPassword(email, password, error =>
                error ? reject(error) : resolve()
            )
        );
    };
    onSubmitFailure (error) {
        this.setState({loginError: error});
    }

    onSubmitSuccess () {
        browserHistory.push('/dashboard');
    }

   render(){
       const CustomSubmitField = props =>
               <SubmitField value="Login" />;

        return (
            <div>
                <AutoForm schema={LoginSchema}
                          placeholder
                          error={this.state.loginError}
                          onSubmit={this.onSubmit}
                          onSubmitFailure={this.onSubmitFailure}
                          onSubmitSuccess={this.onSubmitSuccess}
                          submitField={CustomSubmitField}>
                </AutoForm>
                <p className="account-form-text-after" id="forgot-password-link">
                    Forget password? &nbsp;
                    <Link to="/sign-up">
                        Click here!
                    </Link>
                </p>
            </div>
        )
    }
}