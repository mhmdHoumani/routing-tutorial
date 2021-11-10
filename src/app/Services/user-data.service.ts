import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url = "http://localhost:3000/Users";
  constructor(private http: HttpClient) { }

  // public GetUsers(): { name: string; email: string; phone: number }[] {
  //   return [
  //     {
  //       name: 'Peter', email: 'peter@gmail.com', phone: 1001
  //     },
  //     {
  //       name: 'Tony', email: 'tony@gmail.com', phone: 1242
  //     },
  //     {
  //       name: 'John', email: 'john@gmail.com', phone: 4751
  //     },
  //     {
  //       name: 'Carl', email: 'carl@gmail.com', phone: 1111
  //     }
  //   ];
  // }
  public GetUsers() {
    return this.http.get(this.url);
  }
  public AddUser(data: any) {
    return this.http.post(this.url, data);
  }
}
