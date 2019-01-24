import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-contact-peers',
  templateUrl: './contact-peers.component.html',
  styleUrls: ['./contact-peers.component.scss']
})
export class ContactPeersComponent implements OnInit, AfterViewInit {

  users: User[];

  constructor(public _userService: UsersService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    this._userService.getUsers()
      .subscribe(
        data =>  this.users = data,
        error => console.log(error)
      );
  }
}
