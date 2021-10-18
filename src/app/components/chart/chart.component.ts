import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  
  @HostListener('click') onClick():void {
    this.chartsService.changeActiveChart(this.id);
  }
  
  @Input() chartName:string = '';
  @Input() chartIconSrc:string = '';
  @Input() id:number = 0;
  constructor(public chartsService:ChartsService) { }

  ngOnInit(): void {
  }

}
