import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
@Input() pages = new EventEmitter();
// xss = '<img src="" onerror="alert(123)" />';
  constructor() { }

  ngOnInit(): void {
  }

}
