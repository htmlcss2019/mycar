import React,{Component} from "react";
import { Col, Row } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
// import Home from './pages/home'
import './style/common.less'
export default class Admin extends Component{
    render(){
        return(
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main"> 
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>   
                </Col>
            </Row>
        )
    }
}