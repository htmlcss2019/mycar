import React, { Component } from "react";
import MenuConfig from "../../config/menuConfig";
import './index.less'
import { Menu} from "antd";
const { SubMenu } = Menu;
export default class NavLeft extends Component {
    componentWillMount(){
const menuTreeNode=this.renderMenu(MenuConfig);
this.setState({menuTreeNode})
    } 
    //菜单渲染
    renderMenu=(data)=>{
return data.map((item)=>{
    if(item.children){
        return (<SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}  
        </SubMenu>)
    }
    return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
})
    }
  render() {
    return (
      <div className="logo">
        <img src="/assets/logo-ant.svg" alt="" />
        <h1>Imooc MS</h1>
        <Menu theme="dark">
            { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }
}
