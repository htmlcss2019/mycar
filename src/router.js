import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'

import NoMatch from './pages/noMatch'
export default class ERouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/ui" render={()=>
                            <Admin>  
                                <Switch>            
                                   <Route path="/ui/buttons" component={Buttons}/>
                                   <Route path="/ui/modals" component={Modals}/>

                                   <Route component={NoMatch}/>
                                </Switch>            
                            </Admin>         
                        } />
                        <Route path="/order/detail" component={Login} />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}