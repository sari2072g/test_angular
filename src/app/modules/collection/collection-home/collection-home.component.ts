import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Engineer', employed: false},
    { name: 'Jill', age: 26, job: 'Engineer', employed: true },
    { name: 'Elyse', age: 24, job: 'Designer', employed: true },
  ];
  headers = [
    {key:'employed', label: 'Has A Job?'},
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
