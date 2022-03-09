import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emails = [];
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmailes()
    .subscribe((emails) => {
      this.emails = emails;
    })
  }

}
