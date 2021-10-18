import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import OptionModel from 'src/app/models/optionmodel';
import { LeftsideService } from 'src/app/services/leftside.service';

@Component({
  selector: 'app-optionslist',
  templateUrl: './optionslist.component.html',
  styleUrls: ['./optionslist.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
          { optional: true }
        ),
        query(':leave',
          animate('200ms', style({ opacity: 0 })),
          { optional: true}
        )
      ])
    ])
  ]
})
export class OptionslistComponent implements OnInit {

  optionsArray:OptionModel[] = []; 
  
  constructor(private leftSideService:LeftsideService) { }

  ngOnInit(): void {
    this.optionsArrayInit()
  }

  optionsArrayInit() {
    this.optionsArray = this.leftSideService.getOptionsArray();
  }


}
