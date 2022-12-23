import React, { Component } from 'react'
import moment from 'moment'
import {Card,Form,Input,Icon,Checkbox,Radio,Button,Select,Switch,DatePicker,Upload, TimePicker, message} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import { InputNumber } from 'antd'
 class Register extends Component {
    
    state={}

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
    }
    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    }
    render() {
        const TextArea=Input.TextArea
        const { Option,OptGroup} = Select;
        const RadioGroup=Radio.Group
        const { getFieldDecorator } =this.props.form
          const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
            xs:24,
            sm:20
            }
          } 
          const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return ( 
            <div>
               <Card title="注册表当">
                <Form layout='horizotal'>
                    <FormItem label="用户名"{...formItemLayout}>
                    {
                        getFieldDecorator('userName',{
                            initialValue:'',
                            rules:[{
                                 required:true,
                                 message:'用户名不能为空'
                            }]
                        })(<Input prefix={<Icon type='user'></Icon>} placeholder='请输入用户名'/>)
                    }
                    </FormItem>
                <FormItem label="密码" {...formItemLayout}>
                {
                        getFieldDecorator('userPwd',{
                            initialValue:'',
                            rules:[]
                        })(<Input prefix={<Icon type='lock'></Icon>}  placeholder='请输入密码' />)
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                {
                        getFieldDecorator('sex',{
                            initialValue:'',
                            rules:[]
                        })(<RadioGroup>
                            <Radio value="1">男</Radio>
                            <Radio value="2">女</Radio>

                        </RadioGroup>)
                    }
                </FormItem>
                <FormItem label="年龄" {...formItemLayout}>
                {
                        getFieldDecorator('age',{
                            initialValue:18,
                          
                        })(<InputNumber></InputNumber>)
                    }
                </FormItem>
                <FormItem label="当前状态" {...formItemLayout}>
                {
                        getFieldDecorator('state',{
                            initialValue:'1',
                          
                        })(<Select mode='multiple'>
                           <OptGroup label="Manager">
      <Option value="1">Jack</Option>
      <Option value="2">诗人的梦想</Option>
      <Option value="3">情人眼里出西施</Option>
      <Option value="4">打篮球</Option>
      <Option value="5">打羽毛球</Option>
      <Option value="6">成功的方法</Option>
      <Option value="7">我不能失败</Option>
      <Option value="8">为成功找理由</Option>
                        </OptGroup>
                        </Select>)
                    }
                </FormItem>
                <FormItem label="当前状态" {...formItemLayout}>
                {
                        getFieldDecorator('interest',{
                            initialValue:['2','5'],
                          
                        })(<Select mode='multiple'>
                           <OptGroup label="Manager">
      <Option value="1">爬上</Option>
      <Option value="2">踢足球</Option>
      <Option value="3">跑步</Option>
      <Option value="4">打篮球</Option>
      <Option value="5">打羽毛球</Option>
      <Option value="6">打太极</Option>

                        </OptGroup>
                        </Select>)
                    }
                </FormItem>
                <FormItem label="是否已婚" {...formItemLayout}>
                {
                        getFieldDecorator('is',{
                            initialValue:true, 
                            valuePropName:"checked"
                          
                        })(<Switch></Switch>)
                    }
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                {
                        getFieldDecorator('birthday',{
                            initialValue:moment('2019-09-09')
                        
                          
                        })(<DatePicker showTime
                        format="YYYY-MM-DD"
                        />)
                    }
                </FormItem>
                <FormItem label="地址" {...formItemLayout}>
                {
                        getFieldDecorator('address',{
                         
                        })( <TextArea autosize={
                           {minRows:2,maxRows:5} 
                        }/>)
                    }
                </FormItem>
                <FormItem label="早起时间" {...formItemLayout}>
                {
                        getFieldDecorator('time',{
                         
                        })( <TimePicker/>)
                    }
                </FormItem>
                <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                    {this.state.userImg?<img src={this.state.userImg} alt=''/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                   <Checkbox>我已阅读过<a href="#.">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                        
                </Form>
                </Card> 
            </div>
        )
    }
}
export default Form.create()(Register)