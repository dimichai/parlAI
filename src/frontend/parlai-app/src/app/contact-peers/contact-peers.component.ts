import { KeywordService } from './../services/keyword.service';
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

  constructor(
    public _userService: UsersService,
    public _kwService: KeywordService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadData();
  }

  loadData() {
    this._userService.getUsersByKeywords(this._kwService.currentKeywords)
      .subscribe(
        data =>  this.users = data,
        error => console.log(error)
      );
  }
}
