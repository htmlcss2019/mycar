import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import Home from './pages/home'
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import NoMatch from "./pages/noMatch";
import Notices from "./pages/ui/notice";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import FormLogin from "./pages/form/login";
import Register from './pages/ui/register';
import BasicTable from "./pages/table/basicTable";
import HeightTable from "./pages/table/hightTable";
import City from "./pages/city";
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import User from "./pages/ui/user";
import BikeMap from "./pages/map/bikeMap";
import Bar from "./pages/echarts/bar";
import Pie from "./pages/echarts/pie";
import Line from "./pages/echarts/line";
import RichText from "./pages/rich";
import PermssionUser from "./pages/permission";
export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/common"  render={()=>
              <Common>
              <Route path="/common/order/detail/:orderId" component={OrderDetail} />
              </Common>
            }/>
            <Route
              path="/"
              render={() => ( 
                <Admin>
                  <Switch>
                  <Route path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/loadings" component={Loadings} />
                    <Route path="/ui/notification" component={Notices} />
                    <Route path="/ui/messages" component={Messages} />
                    <Route path="/ui/tabs" component={Tabs} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/ui/carousel" component={Carousels} />
                    <Route path="/form/login" component={FormLogin} />
                    <Route path="/form/reg" component={Register} />
                    <Route path="/table/basic" component={BasicTable} />
                    <Route path="/table/high" component={HeightTable} />
                    <Route path="/city" component={City} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} />
                    <Route path="/bikeMap" component={BikeMap} />
                    <Route path="/charts/bar" component={Bar} />
                    <Route path="/charts/pie" component={Pie} />
                    <Route path="/charts/line" component={Line} />
                    <Route path="/rich" component={RichText} />
                    <Route path="/permission" component={PermssionUser} />

                    <Route component={NoMatch} />
                  </Switch>
                </Admin>
              )}
            />
         </Switch>
        </App>
      </HashRouter>
    );
  }
}
