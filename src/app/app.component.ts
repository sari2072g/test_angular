import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  posts = [
  { 
    title: 'Neat Tree',
    imageUrl: '',
    username: 'nature',
    content: 'saw this awesome tree during my hike todey.'
  },
  { 
    title: 'Snowy Mountain',
    imageUrl: '',
    username: 'mountainlover',
    content: 'here is a picture of a snowy mountain'
  },
  { 
    title: 'Mountain Biking',
    imageUrl: '',
    username: 'biking',
    content: 'i did some biking todey.'
  },
  
  ]
}
