import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import Home from './Home'
export default class Main extends Component {
    render() {
        return (
           
                <div>
                   this is main page.
                   <Link to="/main/a"></Link>
                    <hr/>
                    {this.props.children}
                </div>
           
        )
    }
}
