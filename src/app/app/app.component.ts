import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-test';
  role = 'admin';

  constructor(private appService: AppService) {
    this.appService.roleEmit(this.role);
    this.appService.roleEvent().subscribe((role: string) => {
      this.role = role;
      console.log('role', role);
    });
  }

  ngOnInit() {}

  onRole(role: string) {
    this.appService.roleEmit(role);
  }
}
