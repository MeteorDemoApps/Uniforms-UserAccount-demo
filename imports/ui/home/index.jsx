import React,{ Component } from 'react';
import LoginForm from '../login/form.jsx';
import LayoutPublic from '../layout/public.jsx';

export default class HomeIndex extends Component {
    render(){
        return (
            <LayoutPublic>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login Now (username: admin@meteorDemoApps.com | password: 123)</h3>
                            </div>
                            <div className="panel-body">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutPublic>
        );
    }
}