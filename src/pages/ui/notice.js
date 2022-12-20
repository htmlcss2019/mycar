import React, { Component } from 'react'
import {Card,Button, notification} from 'antd'
export default class Notices extends Component {
    openNoticfication=(type,direction)=>{
        if(direction) {
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:'发工资了',
            description:'上个月上课22天，休息8天'
        })
    }
    render() {

        return (
            <div>
          <Card title="通知提醒框"></Card>
          < Button type='primary' onClick={()=>this.openNoticfication('success')}>success</Button>
          < Button type='primary' onClick={()=>this.openNoticfication('info')}>Info</Button>
          < Button type='primary' onClick={()=>this.openNoticfication('warning')}>Warning</Button>
         < Button type='primary' onClick={()=>this.openNoticfication('error')}>Error</Button>
         <Card title="通知提醒框"></Card>
          < Button type='primary' onClick={()=>this.openNoticfication('success','topLeft')}>success</Button>
          < Button type='primary' onClick={()=>this.openNoticfication('info','topRight')}>Info</Button>
          < Button type='primary' onClick={()=>this.openNoticfication('warning','bottomLeft')}>Warning</Button>
         < Button type='primary' onClick={()=>this.openNoticfication('error','bottomRight')}>Error</Button>

            </div>
        )
    }
}
