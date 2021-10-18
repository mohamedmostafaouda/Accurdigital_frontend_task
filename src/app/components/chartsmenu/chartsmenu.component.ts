import { Component, OnInit } from '@angular/core';
import ChartType from 'src/app/models/chartType';
import { CharttypeService } from 'src/app/services/charttype.service';

@Component({
  selector: 'app-chartsmenu',
  templateUrl: './chartsmenu.component.html',
  styleUrls: ['./chartsmenu.component.scss']
})
export class ChartsmenuComponent implements OnInit {
  chartTypeArray:ChartType[] = [];
  constructor(private chartTypeService:CharttypeService) { }

  ngOnInit(): void {
    this.chartTypeArrayInit();
  }

  chartTypeArrayInit(){
    this.chartTypeArray = this.chartTypeService.getChartTypeArray();
  }
  
}
