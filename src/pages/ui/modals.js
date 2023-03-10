import React, { Component } from 'react'
import { Card,Button,Modal } from 'antd'
import './ui.less'
export default class Modals extends Component {
   
    state={
        showModal1:false,
        showModal2:false,
        showModel3:false,
        showModal4:false,


    }
    handleOpen=(type)=>{
this.setState({
[type]:true
  
})
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认',
            content:'你确定学会了React', 
            onOk(){
console.log("ok");
            },
            onCancel(){
                console.log("cancle");
            }
        })
    }
  render() {
  return ( 
  <div>
<Card title="基础模态框">
    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
    <Button type="primary" onClick={ ()=>this.handleOpen('showModal2')}>自定义页脚</Button>
    <Button type="primary" onClick={ ()=>this.handleOpen('showModel3')}>底部20px弹窗</Button>
    <Button type="primary" onClick={ ()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
</Card>
<Card title="信息确认框">
    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confim</Button>
    <Button type="primary" onClick={ ()=>this.handleConfirm('info')}>Info</Button>
    <Button type="primary" onClick={ ()=>this.handleConfirm('success')}>Success</Button>
    <Button type="primary" onClick={ ()=>this.handleConfirm('warning')}>Warning</Button>
</Card>
<Modal title="React"
visible={this.state.showModal1 }
onCancel={()=>{this.setState({
    showModal1:false
})}}>
<p>欢迎学习慕课新推出的react高级课程</p>
</Modal>
<Modal title="React"
visible={this.state.showModal2 }
onCancel={()=>{this.setState({
    showModal2:false
})}}>
<p>欢迎学习慕课新推出的react高级课程</p>
</Modal>
<Modal title="React"
style={{top:20}}
visible={this.state.showModel3 }
onCancel={()=>{this.setState({
    showModel3:false
})}}>
<p>欢迎学习慕课新推出的react高级课程</p>
</Modal>
<Modal title="React"
wrapClassName='vertical-center-modal'
visible={this.state.showModal4 }
onCancel={()=>{this.setState({
    showModal4:false
})}}>
<p>欢迎学习慕课新推出的react高级课程</p>
</Modal>
    </div>
  )
  }
}
