import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  name: string;
  phoneNo: string;
  connections: {
    friends: number;
    groups: number;
    articles: number;
  }
}

interface Users {
  users: User[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public http: HttpClient) { }

  users: User[];

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.http.get<Users>('http://localhost:8080/data/users.json').subscribe(
      ({users}) => {
        this.users = users;
      }
    )
  }
}
