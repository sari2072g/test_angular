import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForcastService } from '../../forcast.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent implements OnInit {
  forcastData = [];
  forcast$: Observable<{ dateString: string, temp: number}[]>;

  constructor(private forCastService: ForcastService) {
  this.forcast$ =  forCastService.getForCast();
  }

  ngOnInit(): void { }
}
