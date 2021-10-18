import { Injectable } from '@angular/core';
import { LeftNavStatus } from '../Enums/leftnavstatus';
import OptionModel from '../models/optionmodel';

@Injectable({
  providedIn: 'root'
})


export class LeftsideService {
  optionsArray:OptionModel[] = [];
  
  leftSideNavStatus:LeftNavStatus = LeftNavStatus.Open; //Open by default
  
  constructor() { 
    this.itemsInit();
  }

  itemsInit(){
    this.optionsArray = [
      new OptionModel('Dashboard', 'assets/icons/home.png'),
      new OptionModel('Options', 'assets/icons/options.png'),
      new OptionModel('Calendar', 'assets/icons/calender.png')
    ]
  }

  getOptionsArray(){
    return this.optionsArray;
  }

  toggleLeftSideNav(){
    this.leftSideNavStatus =  this.leftSideNavStatus == LeftNavStatus.Open ? LeftNavStatus.Closed : LeftNavStatus.Open;
  }

  getCurrentStatus(){
    return this.leftSideNavStatus;
  }
  
}
