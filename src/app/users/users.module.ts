import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserfilterPipe } from './pipes/userfilter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [UsersComponent, UserListComponent, UserEditComponent, UserfilterPipe, SortByPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
