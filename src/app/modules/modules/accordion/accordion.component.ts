import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
@Input() items: any[] = [];
opendItemIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(index: number) {
    if(index === this.opendItemIndex) {
      this.opendItemIndex = -1;
    } else {
      this.opendItemIndex = index;
    }
  }

}
