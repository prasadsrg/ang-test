import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  page: string = 'person';
  role: string;
  auth: any = {};

  constructor(private appService: AppService) {
    this.role = this.appService.getSessionRole();
    this.auth = this.appService.getAuth(this.role, this.page);
    console.log('auth :::', this.auth);
    this.appService.roleEvent().subscribe((role) => {
      this.role = role;
      this.auth = this.appService.getAuth(this.role, this.page);
      console.log('auth :::', this.auth);
    });
  }

  ngOnInit(): void {}
}
