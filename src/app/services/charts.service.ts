import { Injectable } from '@angular/core';
import ChartModel from '../models/chartmodel';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  
  chartsArray: ChartModel[] = [];

  activeChartId: number = -1;
  
  activeChart: ChartModel;

  constructor() {
    this.chartsArrayInit();
    this.activeChart = new ChartModel('', '', -1);
   }

  chartsArrayInit(){
    this.chartsArray = [
      new ChartModel('Pie Chart', 'assets/icons/pie-chart.png', 1),
      new ChartModel('Histogram Chart', 'assets/icons/histogram.png', 2),
      new ChartModel('Line Chart', 'assets/icons/bar-chart.png', 3),
      new ChartModel('Scatter Plot', 'assets/icons/scatterplot.png', 4),
      new ChartModel('Scatter Plot', 'assets/icons/bubblechart.png', 5),
    ]
  }

  getchartsArray(){
    return this.chartsArray;
  }

  getActiveChartId(){
    return this.activeChart.id;
  }

  getActiveChart(){
    return this.activeChart;
  }

  changeActiveChart(chartId:number){
    this.activeChartId = chartId;
    this.activeChart = this.chartsArray.filter(chart => chart.id == chartId)[0];
  }
}
