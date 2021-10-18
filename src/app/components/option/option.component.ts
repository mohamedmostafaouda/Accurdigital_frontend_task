import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() optionName:string;
  @Input() iconSrc:string;
  
  constructor() { 
    this.optionName = '';
    this.iconSrc = '';
  }

  ngOnInit(): void {
    
  }

}
