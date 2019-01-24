import { KeywordService } from './../services/keyword.service';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-contact-peers',
  templateUrl: './contact-peers.component.html',
  styleUrls: ['./contact-peers.component.scss']
})
export class ContactPeersComponent implements OnInit {

  users: User[];

  constructor(
    public _userService: UsersService,
    public _kwService: KeywordService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._userService.getUsersByKeywords(this._kwService.currentKeywords)
      .subscribe(
        data => {
          this.users = data;
          this.ref.markForCheck();
        },
        error => console.log(error)
      );
  }
}
