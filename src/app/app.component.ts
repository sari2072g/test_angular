import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './components/section 21/auth.service';
import { WikipediaService } from './components/section-13/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  // title = 'test';
  // pages = []
  // posts = [
  // { 
  //   title: 'Neat Tree',
  //   imageUrl: '',
  //   username: 'nature',
  //   content: 'saw this awesome tree during my hike todey.'
  // },
  // { 
  //   title: 'Snowy Mountain',
  //   imageUrl: '',
  //   username: 'mountainlover',
  //   content: 'here is a picture of a snowy mountain'
  // },
  // { 
  //   title: 'Mountain Biking',
  //   imageUrl: '',
  //   username: 'biking',
  //   content: 'i did some biking todey.'
  // },
  // ]

  // onTerm(value: string) {
  //   debugger
  //   const result = this.wikipediaService.search(value).subscribe(x => {
  //    this.pages = x.query.search;
  //   })
    
  // }
  constructor(
    private wikipediaService: WikipediaService,
    private authService: AuthService,
  ) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
    this.authService.signout().subscribe(() => {})
  }
}
