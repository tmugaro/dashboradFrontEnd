import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BloodGlucose } from './service/models/bloodGlucose';
import { BoundElementProperty } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  option:[EChartsOption] = {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['FirstName', 'LastName', 'Age', 'Weight', 'Height', 'BloodGlucose','BloodPressure']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'FirstName',
        type: 'line',
        stack: 'Total',
        data: ['tinashe', 'john', 'spardo', 'peter', 'enuice', 'portia', 'clara']
      },
      {
        name: 'LastName',
        type: 'line',
        stack: 'Total',
        data: ['choga', 'anna', 'masango', 'tendai', 'marcieline', 'fadzai', 'cashington']
      },
      {
        name: 'Age',
        type: 'line',
        stack: 'Total',
        data: [30, 32, 20, 54, 90, 33, 41]
      },
      {
        name: 'Weight',
        type: 'line',
        stack: 'Total',
        data: [155, 120, 150, 170, 180, 120, 200]
      },
      {
        name: 'Height',
        type: 'line',
        stack: 'Total',
        data: [200, 155, 145, 140, 150, 160, 120]
      },
      {
        name: 'BloodGlucose',
        type: 'line',
        stack: 'Total',
        data: [120, 300, 400, 500, 460, 400, 400]
      },
      {
        name: 'BloodPressure',
        type: 'line',
        stack: 'Total',
        data: [120, 170, 120, 90, 98, 96, 80]
      },
    
    ]
  };
  
  
  title = 'dashboard';
}
