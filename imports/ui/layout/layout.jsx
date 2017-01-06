import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/footer.css";

import React,{ Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/" >
                                <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"/>
                                &nbsp; &nbsp;
                                Uniforms-UserAccount
                                &nbsp; &nbsp;
                                <span className="label label-warning">MeteorDemoApps </span>
                            </Link>
                        </div>
                        {this.props.menuItems}
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
                <footer className="container-fluid text-center bg-lightgray">
                    Get Source from <a href="https://github.com/MeteorDemoApps/Uniforms-UserAccount-demo">github page</a>
                </footer>
            </div>
        )
    };
}