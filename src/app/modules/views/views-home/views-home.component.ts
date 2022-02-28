import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
stats = [
  { value: 22, label: '# of Users' },
  { value: 900, label: 'Revenu' },
  { value: 50, label: 'Reviews' },
];

items = [
  { image: '', title: 'Couch', description: 'This is a fantastic couch to sit on' },
  { image: '', title: 'Dresser', description: 'This is a great  dresser to put stuff on' },
 ];
  constructor() { }

  ngOnInit(): void {
    debugger
    this.stats = [
      { value: 22, label: '# of Users' },
      { value: 900, label: 'Revenu' },
      { value: 50, label: 'Reviews' },
    ];

    this.items = [
      { image: '', title: 'Couch', description: 'This is a fantastic couch to sit on' },
      { image: '', title: 'Dresser', description: 'This is a great  dresser to put stuff on' },
     ];
  }

}
