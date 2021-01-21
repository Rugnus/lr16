import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Muser, MyGroups } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
import { isNullOrUndefined } from 'util';
import {GroupfilterPipe} from '../../shared/pipes/groupfilter.pipe'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Muser[] = [];
  group: MyGroups;
  sortType = 'higherId';
  instruments: boolean = false;
  searchStr: string = '';

  constructor(private muserService: MuserService, private router: Router, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.params.subscribe((param) => {
      this.group = param.group;
    });
  }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    try {
      this.users = await this.muserService.getAll();
      // this.users = isNullOrUndefined(await users) ? [] : await users;
    } catch (error) {
      console.log(error);
    }
  }

  getAge(date: string) {
    let a = new Date(date);
    let b = new Date();
    let date_diff = b.getTime() - a.getTime();
    let age = Math.floor(date_diff / 1000 / 60 / 60 / 24 / 365);
    return age;
  }

  deleteOneUser(id: number) {
    this.onDeleteUser(id);
    this.getData();
    this.getData();
  }

  editOneUser(user: Muser) {
    if (user.edit) {
      user.edit = false;
      this.onEditUser(user.id, user);
      this.getData();
      this.getData();
    } else {
      user.edit = true;
    }
  }
  
  onAddProfile() {
    this.router.navigate([this.router.url, 'profile'])
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id])
  }

  async onEditUser(id: number, user: Muser) {
    try {
      await this.muserService.putOne(id, user);
    } catch (error) {
      console.log(error);
    }
  }

  async onDeleteUser(id: number) {
    try {
      await this.muserService.deleteOneByid(id)
    } catch (error) {
      console.log(error);
    }
  }
}
