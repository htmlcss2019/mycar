import React, { Component } from 'react'
import {Card,Button,Radio, notification} from 'antd'
export default class Notices extends Component {
    openNoticfication=(type)=>{
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
            </div>
        )
    }
}
