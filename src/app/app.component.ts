import { Component } from '@angular/core';
import { UserDataService } from './Services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-tutorial';
  users: any;
  constructor(private userData: UserDataService) {
    userData.GetUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
