import { Injectable } from '@angular/core';
import NavModel from '../models/navmodel';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  navArray:NavModel[] = [];
  
  constructor() { 
    this.itemsInit();
  }

  itemsInit(){
    this.navArray = [
      new NavModel('Home'),
      new NavModel('Contact')
    ]
  }

  getNavArray(){
    return this.navArray;
  }
}
