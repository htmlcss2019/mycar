import React, { Component } from 'react'
import {Card,Spin,Icon,Alert} from 'antd'
export default class Loadings extends Component {
    render() {
        const icon=<Icon type="loading" style={{fontSize:24}}/>
        const iconLoading=<Icon type="loading" style={{fontSize:24}}/>

        return (
            <div>
                <Card title="Spin用法">
       <Spin size='small'></Spin>
       <Spin style={{margin:"0 10px"}}></Spin>
       <Spin size='large'></Spin>
       <Spin indicator={icon} style={{marginLeft:10}}></Spin>
                </Card>
                <Card title="内容遮罩">
<Alert message="React" description="欢迎来到React高级实战课程"type="info"/>
<Spin><Alert message="React" description="欢迎来到React高级实战课程"type="warning"/></Spin>
<Spin tip='加载中...'><Alert message="React" description="欢迎来到React高级实战课程"type="warning"/></Spin>
<Spin indicator={iconLoading}><Alert message="React" description="欢迎来到React高级实战课程"type="warning"/></Spin>

                </Card>
            </div>
        )
    }
}
