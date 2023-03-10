import React, { Component } from 'react'
import Main from './Main'
import About from './about'
import Topic from './topic'
import { HashRouter, Route,Link,Switch } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Switch>
            </div>
        </HashRouter>
        )
    }
}
