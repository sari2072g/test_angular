import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photoUrl: string;
  constructor(private photeService: PhotoService) { 
    this.fetchPhoto();
  }

  ngOnInit(): void {
   
  }
  onClick() {
   this.fetchPhoto();
  }
  fetchPhoto() {
    this.photeService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
        console.log(response);
    })
  }
}
