import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  currentPage = 0;
  images = [
    {
      title: 'At The Beatch',
      url: '',
    },
    {
      title: 'At The Forest',
      url: '',
    },
    {
      title: 'At The City',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
    {
      title: 'At The Snow',
      url: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  checkWindowsIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5
  }

}
