import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userData: UserDataService) { }

  public AddNewUser(user: any) {
    console.warn(this.userData.AddUser(user));
    this.userData.AddUser(user).subscribe((data) => {
      console.warn("User: " + data);
    });
  }

  ngOnInit(): void {
  }

}
