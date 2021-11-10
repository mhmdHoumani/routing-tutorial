import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  constructor(private userData: UserDataService) {
    userData.GetUsers().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {
  }
}
