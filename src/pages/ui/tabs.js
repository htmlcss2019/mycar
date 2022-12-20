import React, { Component } from 'react'
import {Card, Tabs,message, Icon} from 'antd'
import { act } from 'react-dom/test-utils';
const { TabPane } = Tabs;
export default class Tabss extends Component {
    newTabIndex=0;
    callback=(key)=>{
message.info(`hi,你选择了页签：${key}`)
   } 
   componentWillMount(){
    const panes=[{
        title:"Tab 1",
       context:'Tab 1 ',
       key:'1'
    },
    {
        title:"Tab 2",
       context:'Tab 2',
       key:'2'
    },
    {
        title:"Tab 3",
       context:'Tab 3 ',
       key:'3'
    }]
    this.setState({
        panes,
        activeKey:panes[0].key
    })
   }
   onEdit=(targetKey,action)=>{
this[action](targetKey)
   }
   add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
    render() {

        return (
            <div>
          <Card title="Tab页标签"></Card>
     <Tabs defaultActiveKey="1" onChange={this.callback}>
     <TabPane tab="Tab 1" key="1">
     欢迎学习React课程
    </TabPane>
    <TabPane tab="Tab 2" key="2">
    欢迎学习React课程
    </TabPane>
    <TabPane tab="Tab 3" key="3">
    欢迎学习React课程的高级部分
    </TabPane>
     </Tabs>
     <Card title="Tab带图的页签"></Card>
     <Tabs defaultActiveKey="1" onChange={this.callback}>
     <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">
     欢迎学习React课程
    </TabPane>
    <TabPane tab={<span><Icon type="edit"/>Tab 1</span>} key="2">
    欢迎学习React课程
    </TabPane>
    <TabPane tab={<span><Icon type="delete"/>Tab 1</span>} key="3">
    欢迎学习React课程的高级部分
    </TabPane>
     </Tabs>
     <Card title="Tab页标签"></Card>
     <Tabs defaultActiveKey="1" onChange={this.callback} type="editable-card" activeKey={this.state.activeKey}>
     {
        this.state.panes.map((panel)=>{
            return <TabPane tab={panel.title} key={panel.key} onEdit={this.onEdit}/>
        })
     }
    
     </Tabs>
            </div>
        )
    }
}
