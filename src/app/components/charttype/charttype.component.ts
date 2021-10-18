import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { CharttypeService } from 'src/app/services/charttype.service';

@Component({
  selector: 'app-charttype',
  templateUrl: './charttype.component.html',
  styleUrls: ['./charttype.component.scss']
})
export class CharttypeComponent implements OnInit {

  @Input() chartTypeName:string = '';
  @Input() chartTypeId:number = -1;
  newItemEvent: any;
  constructor(public chartTypeService:CharttypeService) { }

  ngOnInit(): void {
  }

  changeSelected(){
    this.chartTypeService.changeSelectedChartType(this.chartTypeId);
  }
}
function value(value: any) {
  throw new Error('Function not implemented.');
}

