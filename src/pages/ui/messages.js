import React, { Component } from 'react'
import {Card,Button,message} from 'antd'
export default class Messages extends Component {
   showMessage=(type)=>{
    message[type]('恭喜你，React课程');
   }
    render() {

        return (
            <div>
         <Card title='全局提示框'>
            <Button type='primary'onClick={()=>this.showMessage('success')}>Success</Button>
            <Button type='primary'onClick={()=>this.showMessage('info')}>Info</Button>
            <Button type='primary'onClick={()=>this.showMessage('error')}>Error</Button>
            <Button type='primary'onClick={()=>this.showMessage('loading')}>Loading</Button>
            <Button type='primary'onClick={()=>this.showMessage('warning')}>Warning</Button>

         </Card>
            </div>
        )
    }
}
