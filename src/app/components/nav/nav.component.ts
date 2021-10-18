import { Component, OnInit } from '@angular/core';
import { LeftsideService } from 'src/app/services/leftside.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public leftSideNavService:LeftsideService) { }

  ngOnInit(): void {
  }

}
