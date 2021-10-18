import { Injectable } from '@angular/core';
import ChartType from '../models/chartType';

@Injectable({
  providedIn: 'root'
})
export class CharttypeService {
  
  chartTypeArray:ChartType[] = [];
  selectedChartTypeId:number = 0;

  constructor() { 
    this.chartTypeArrayInit();
  }

  chartTypeArrayInit(){
    this.chartTypeArray = [
      new ChartType('Datasource'),
      new ChartType('Graph Type'),
      new ChartType('Properties')
    ]
  }

  getChartTypeArray(){
    return this.chartTypeArray;
  }

  changeSelectedChartType(id:number){
    this.selectedChartTypeId = id;
  }

  getSelectedChartType(){
    return this.selectedChartTypeId;
  }
}
