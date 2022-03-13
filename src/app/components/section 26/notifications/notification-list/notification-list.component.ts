import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService, Command } from '../notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  masseges: Observable<Command[]>;
  constructor(
   private notificationService: NotificationService,
  ) {
    this.masseges = notificationService.massegesOutput;
    setInterval(() => {
      notificationService.addError('IT IS WORKING!!!!!');
    }, 2000);
  }

  ngOnInit(): void {
  }
  clearMassege(id: number) {
    this.notificationService.clearMessege(id);
  }
}
