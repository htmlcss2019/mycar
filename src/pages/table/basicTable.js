import React, { Component } from 'react'
import {Card,Table,Modal} from 'antd'
import axios from 'axios'
import utils from '../../components/utils/utils'
export default class BasicTable extends Component {
    state={dataSource2:[]}
    componentDidMount(){
    const dataSource=[
        {
            id:"0",
            key:"1",
            userName:"jack",
            sex:"1",
            state:"1",
            interest:"1",
            birthday:"2000-01-01",
            address:"云南省曲靖 市富源县墨红镇",
            time:"09:00"
    
    },{
        id:"1",
        key:"2",
        userName:"leilei",
        sex:"1",
        state:"1",
        interest:"1",
        birthday:"2000-01-01",
        address:"云南省曲靖 市富源县墨红镇",
        time:"09:00"

},{
    id:"2 ",
    key:"3",
    userName:"xiaoming",
    sex:"1",
    state:"1",
    interest:"1",
    birthday:"2000-01-01",
    address:"云南省曲靖 市富源县墨红镇",
    time:"09:00"

}
    ]
    this.setState({
        dataSource
    })
    this.request();
    }
    request=()=>{
        const baseUrl='https://www.fastmock.site/mock/cac891d5bbf061476def7bdf77bd5094/info'
        axios.get(`${baseUrl}/table/list`).then(res=>{
            console.log("res",res);
             this.setState({
                dataSource2:res.data.result
             })
        })
    }
    
    onRowClick = (record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem: record
        })
    }
    render() {
        const columns=[
            {title:"id",
            dataIndex:"id",
            key:"1"
        },{
            title:"用户名",
            dataIndex:"userName",
            key:"2"
        }
        ,{
            title:"性别",
            dataIndex:"sex",
            key:"3",
           render(sex){
            return sex===1?"男":"女"
           }
        }
        ,{
            title:"状态",
            dataIndex:"state",
            key:"4",
            render(interest){
                let config={
                     "1":"诗人",
                     "2":"北大才子",
                     "3":"异乡人",
                     "4":"成功的方法",
                     "5":"失败",
                     "6":"你的成功",
                    
                    }
                    return config[interest]
                   
                
            }
        },{
            title:"爱好",
            dataIndex:"interest",
            key:"5",
            render(interest){
                let config={
                     "1":"打篮球",
                     "2":"打羽毛球",
                     "3":"打乒乓球",
                     "4":"爬上",
                     "5":"跳舞",
                     "6":"踢足球",
                    
                    }
                    return config[interest]
                   
                
            }

        },{
            title:"生日",
            dataIndex:"birthday",
            key:"6"
        }
        ,{
            title:"地址",
            dataIndex:"address",
            key:"7"
        }
        ,{
            title:"早起时间",
            dataIndex:"time",
            key:"8"
        }
        ]
        
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格 ">
                   < Table columns={columns}
                   dataSource={this.state.dataSource}
                   pagination={false}
                   />
                </Card>
                <Card title="动态数据渲染表格 " style={{margin:"20px 0"}}>
                   < Table columns={columns}
                   dataSource={this.state.dataSource2}
                   pagination={false}
                   />
                </Card> 
                <Card title="Mock-单选" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        onRow={(record,index) => {
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="表格分页 " style={{margin:"20px 0"}}>
                   < Table columns={columns}
                   dataSource={this.state.dataSource3}
                   pagination={utils.pagination}
                   />
                </Card> 
            </div>
        )
    }
}
