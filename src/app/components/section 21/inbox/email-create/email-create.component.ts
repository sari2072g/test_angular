import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Email } from '../../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  showModal = false;
email: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService,
    ) { 
    this.email = {
      id: '',
      subject: '',
      from: `${authService.username}@angular-email.com`,
      to: '',
      html: '',
      text: '',
    }
  }

  ngOnInit(): void {
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }

}
