import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import ChartModel from 'src/app/models/chartmodel';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-chartviewer',
  templateUrl: './chartviewer.component.html',
  styleUrls: ['./chartviewer.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition('*<=>*',[
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ChartviewerComponent implements OnInit {
  chart:ChartModel;
  
  constructor(public chartsService:ChartsService) { 
    this.chart = this.chartsService.getActiveChart();
  }

  ngOnInit(): void {
  }

}
