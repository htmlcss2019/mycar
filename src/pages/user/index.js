import React,{Component} from 'react'
import { Card,Button } from 'antd'
// import axios from '../../../ axios'


export default class User extends Component {
  formList = [
    {
      type:'SELECT', 
      label:'城市',
      field:'user_city',
      placeholder:'请输入你的城市',
      width:80,
  },
  {
    type:'SELECT',
    label:'手机号',
    field:'user_mobile',
    placeholder:'请输入手机号',
    width:80,
},
{
  type:'SELECT',
  label:'前选择入职日期',
  field:'user_date',
  placeholder:'请输入日期',
  width:80,
},
  ]
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
