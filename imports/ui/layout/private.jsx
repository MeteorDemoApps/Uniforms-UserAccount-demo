import React,{ Component } from 'react';
import { Link } from 'react-router';
import Layout from './layout.jsx';

export default class LayoutPrivate extends Component {

    render(){
        return (
            <Layout
                menuItems={
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Private Link</a></li>
                  </ul>
                }>
                {this.props.children}
            </Layout>
        )
    };
}
