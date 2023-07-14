import { Component } from '@angular/core';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';

@Component({
  standalone: true,
  selector: 'my-chart',
  template: `
    <div echarts [options]="chartOptions" class="demo-chart"></div>
  `,
  imports: [NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') })
    },
  ]
})
export class MyChartComponent {
  
}