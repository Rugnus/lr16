import { Component, OnInit } from '@angular/core';
import { MuserService } from '../shared/services/muser.service';
import {Muser, MyGroups} from '../shared/models/muser.model';
import { group } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
