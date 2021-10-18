import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LeftsideService } from 'src/app/services/leftside.service';

@Component({
  selector: 'app-leftsidenav',
  templateUrl: './leftsidenav.component.html',
  styleUrls: ['./leftsidenav.component.scss'],
  animations: [
    /* onenter Animation */
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),

    /* Hide and Show Animation */
    trigger('showHideAnimation', [
      state('0', style({
        marginLeft: '-300px',
        opacity: 0
      })),

      state('1', style({
        marginLeft: '0px',
        opacity: 1
      })),
      
      transition('0<=>1',[
        animate('300ms')
      ])
    ])
  ]
})
export class LeftsidenavComponent implements OnInit {

  constructor(public leftSideNavService:LeftsideService) { }

  ngOnInit(): void {
  }

}
