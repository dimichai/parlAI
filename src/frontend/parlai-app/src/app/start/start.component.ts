import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  title = 'parlAI';
  users: User[];

  constructor(private router: Router,
    public _userService: UsersService) { }

  ngOnInit() {
    this.loadData();
    localStorage.removeItem('savedUser');
  }

  loadData() {
    this._userService.getUsers()
      .subscribe(
        data =>  this.users = data,
        error => console.log(error)
      );
  }

  userSelected(selected) {
    // this.router.navigate(['upload'], {queryParams: { userid: selected.id } });
    this.uService.setUser(selected);
    this.router.navigate(['upload']);
  }
}
