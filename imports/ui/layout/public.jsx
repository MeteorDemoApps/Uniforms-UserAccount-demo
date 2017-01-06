import React,{ Component } from 'react';
import { Link } from 'react-router';
import Layout from './layout.jsx';

export default class LayoutPublic extends Component {
    render(){
        return (
            <Layout
                menuItems={
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Public Link</a></li>
                  </ul>
                }>
                    {this.props.children}
            </Layout>
        )
    };

}
