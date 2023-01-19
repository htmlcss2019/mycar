
import React from 'react'
import  echartTheme  from './../echartTheme'
//导入柱形图
import * as echarts from 'echarts';
// import  echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend' 
import 'echarts/lib/component/markPoint'
import ReactEcharts from "echarts-for-react"
import {Card} from 'antd'
export default class Bar extends React.Component {
  componentWillMount(){
    echarts.registerTheme('Imooc',echartTheme)
  }
  getOption=()=>{
    let option = {
      title: {
          text: '用户骑行订单'
      },
      tooltip : {
          trigger: 'axis'
      },
      xAxis: {
          data: [
              '周一',
              '周二',
              '周三',
              '周四',
              '周五',
              '周六',
              '周日'
          ]
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name: '订单量',
              type: 'bar',
              data: [
                  1000,
                  2000,
                  1500,
                  3000,
                  2000,
                  1200,
                  800
              ]
          }
      ]
  }
  return option;
  }
  getOption2=()=>{
    let option = {
      title: {
          text: '用户骑行订单'
      },
      tooltip : {
          trigger: 'axis'
      },
      legend:{data:['小明','小狼','订单量']},

      
      xAxis: {
          data: [
              '周一',
              '周二',
              '周三',
              '周四',
              '周五',
              '周六',
              '周日'
          ]
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name: '订单量',
              type: 'bar',
              data: [
                  800,
                  1000,
                  1200,
                  1500,
                  2000,
                  3000,
                  5000
              ]
          },
          {
            name: '小明',
            type: 'bar',
            data: [
               
                2000,
                1000,
                1500,
                1800,
                2000,
                800,
                3000
            ]
        },  {
          name: '小狼',
          type: 'bar',
          data: [
              1000,
              2000,
              1000,
              3000,
              600,
              1200,
              1000
          ]
      }
      ]
  }
  return option;
  }
  render() {
    return ( 
      <div>
<Card title="柱形图表之一">
  <ReactEcharts option={this.getOption()} them="Imooc" style={{height:500}}></ReactEcharts>
</Card>
<Card title="柱形图表之二" style={{marginTop:10}}>
<ReactEcharts option={this.getOption2()} them="Imooc" style={{height:500}}></ReactEcharts>

</Card>

      </div>
    )
  }
}
