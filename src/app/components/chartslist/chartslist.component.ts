import { Component, OnInit } from '@angular/core';
import ChartModel from 'src/app/models/chartmodel';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-chartslist',
  templateUrl: './chartslist.component.html',
  styleUrls: ['./chartslist.component.scss']
})
export class ChartslistComponent implements OnInit {

  chartsArray:ChartModel[] = [];
  
  constructor(private chartsService:ChartsService) { }

  ngOnInit(): void {
    this.chartsInit();
  }

  chartsInit(){
    this.chartsArray = this.chartsService.getchartsArray();
  }

}
