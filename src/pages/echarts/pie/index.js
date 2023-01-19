
import React from 'react'
import  echartTheme  from './../echartTheme'
//导入柱形图
import * as echarts from 'echarts';
// import  echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend' 
import 'echarts/lib/component/markPoint'
import ReactEcharts from "echarts-for-react"
import {Card} from 'antd'
export default class Pie extends React.Component {
  componentWillMount(){
    echarts.registerTheme('Imooc',echartTheme)
  }
  getOption=()=>{
  let  option = {
        title: {
          text: '用户骑行订单',
     
   
        },
        tooltip: {
          trigger: 'item',
          formatter:'{a}<br/>{b}:{c}({d}%)'

        },
        legend: {
            orient:'vertical',
            right:10,
            top:20,
            bottom:20,
         data:['周一','周二','周三','周四','周五','周六','周日']
        },
        series: [
          {
            name: '订单量',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '周一' },
              { value: 735, name: '周二' },
              { value: 580, name: '周三' },
              { value: 484, name: '周四' },
              { value: 300, name: '周五' },
              { value: 484, name: '周六' },
              { value: 484, name: '周天' },

            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
   return option;
  }
  getOption2=()=>{
    let  option = {
          title: {
            text: '用户骑行订单',
       
     
          },
          tooltip: {
            trigger: 'item',
            formatter:'{a}<br/>{b}:{c}({d}%)'
          },
          legend: {
            orient:'vertical',
            right:10,
            top:20,
            bottom:20,
           data:['周一','周二','周三','周四','周五','周六','周日']
          },
          series: [
            {
              name: '订单量',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '周一' },
                { value: 735, name: '周二' },
                { value: 580, name: '周三' },
                { value: 484, name: '周四' },
                { value: 300, name: '周五' },
                { value: 484, name: '周六' },
                { value: 484, name: '周天' },
  
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
     return option;
    }
    getOption3=()=>{
        let  option = {
              title: {
                text: '用户骑行订单',
           
         
              },
              tooltip: {
                trigger: 'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
              },
              legend: {
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
               data:['周一','周二','周三','周四','周五','周六','周日']
              },
              series: [
                {
                  name: '订单量',
                  type: 'pie',
               
                  data: [
                    { value: 1048, name: '周一' },
                    { value: 735, name: '周二' },
                    { value: 580, name: '周三' },
                    { value: 484, name: '周四' },
                    { value: 300, name: '周五' },
                    { value: 484, name: '周六' },
                    { value: 484, name: '周天' },
      
                  ].sort((a,b)=>{
                    return a.value-b.value;
                  }),
                  roseType:'radius',
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
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
<Card title="柱形图表之二" style={{marginTop:10}}>
<ReactEcharts option={this.getOption3()} them="Imooc" style={{height:500}}></ReactEcharts>

</Card>

      </div>
    )
  }
}
