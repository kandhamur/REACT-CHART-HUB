import React from 'react'
import {Bar} from 'react-chartjs-2';
import {chart} from 'chart.js/auto'


const labels=['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec'];
const options={
  plugins:{
    legend:{
      position:'top'
    },
    title:{
      display:true,
      text:'Expense Tracker'
    }
  }
}

const data={
  labels,
  datasets:[
    {
      label:'2020 Expense',
      data:[10000,8000,12000,14000,9000,13000,12400,14000,9800,6700,7900,4500],
      backgroundColor:'pink'
    },
    {
      label:'2021 Expense',
      data:[12000,8200,13000,12300,9600,12000,13400,15000,9100,6200,9700,5400],
      backgroundColor:'orange'
    }
  ]
}

const App = () => {
  return (
    <div style={{'height':400,'width':800,'margin':'auto'}}>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default App
