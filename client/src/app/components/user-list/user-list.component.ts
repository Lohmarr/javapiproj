import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private UserService: UserService) {}

  ngOnInit() {
    this.UserService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }

}
