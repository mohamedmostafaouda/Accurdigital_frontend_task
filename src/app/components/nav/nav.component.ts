import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LeftsideService } from 'src/app/services/leftside.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations:[
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class NavComponent implements OnInit {

  constructor(public leftSideNavService:LeftsideService) { }

  ngOnInit(): void {
  }

}
