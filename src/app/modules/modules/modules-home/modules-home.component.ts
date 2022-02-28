import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
modalOpen = false;

items = [
  { title: 'Why is the sky blue?', content: 'The sky is blue beacose it is' },
  { title: 'What does an orange taste like?', content: 'An orange taste like orenge' },
  { title: 'What color is that cat?', content: 'The cat is black' }
];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { title: 'Why is the sky blue?', content: 'The sky is blue beacose it is' },
      { title: 'What does an orange taste like?', content: 'An orange taste like orenge' },
      { title: 'What color is that cat?', content: 'The cat is black' }
    ];
  }
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
