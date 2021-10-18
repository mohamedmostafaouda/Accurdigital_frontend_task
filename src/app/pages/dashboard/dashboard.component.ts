import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInRight', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-20px)'}),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(20px)'}),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ],
  
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
