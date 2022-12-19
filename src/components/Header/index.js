import React, { Component } from 'react'
import {Row,Col } from 'antd'
import './index.less'
import axios from 'axios'
import Util from '../utils/utils'
export default class Header extends Component {
    state={}
    componentWillMount(){
    this.setState({
        username:"河畔一角"
    })
    setInterval(()=>{
       let sysTime=Util.formateDate(new Date().getTime())
       this.setState({ sysTime})
    },1000)
    this.getWeatherAPIData();
    }
    getWeatherAPIData(){ 
//  let city='北京';
axios.get(
  'https://devapi.qweather.com/v7/weather/now?location=101010100&key=c3bfaa5f0cfe42119819c82344c89e11'  
).then((res)=>{
    // console.log("res",res);
        let data=res.data.now;
        // console.log("data",data);
        this.setState({
            text:data.text,
            icon:data.icon
        })
    
})
    }
    render() {
        return (
            <div className='header'>
            <Row className='header-top'> 
                <Col span='24'>
                    <span>欢迎，{this.state.username}</span>
                    <a href="javascript : ;">退出</a>
                </Col> 
            </Row>
            <Row className='breadcrumb'>
                <Col span='4' className='breadcrumb-title'>
                    首页
                </Col>
                <Col span='20' className='weather'>
                    <span className='data'>{this.state.sysTime}</span>
                    <span className='weather-img'><img src={this.state.icon} alt=''/></span>
                    <span className='weather-detail'>{this.state.text}</span>
                </Col>
            </Row>
            </div> 
        )
    }
}
