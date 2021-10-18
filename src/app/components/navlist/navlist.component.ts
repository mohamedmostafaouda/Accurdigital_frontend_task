import { Component, OnInit } from '@angular/core';
import NavModel from 'src/app/models/navmodel';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.scss']
})
export class NavlistComponent implements OnInit {

  navArray:NavModel[] = [];
  
  constructor(private navService:NavService) { }

  ngOnInit(): void {
    this.navArrayInit();
  }

  navArrayInit() {
    this.navArray = this.navService.getNavArray();
  }

}
