import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPage: number;
  pageOptions: number[];
  
  currentPage = 1;

  constructor() {
    this.pageOptions = [
      this.currentPage -2,

    ].filter(pageNumber => pageNumber >= 1 
      && pageNumber <= this.numberOfPage );
   }

  ngOnInit(): void { }

}
