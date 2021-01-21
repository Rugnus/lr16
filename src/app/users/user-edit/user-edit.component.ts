import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Muser, MyGroups } from 'src/app/shared/models/muser.model';
import { MuserService } from 'src/app/shared/services/muser.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  users: Muser[] = [];
  id: number;
  user: Muser;
  userForm: FormGroup;
  group: MyGroups;


  constructor(private activatedRoute: ActivatedRoute, private muserService: MuserService, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (!isNullOrUndefined(params.id)) {
        this.id = params.id;
      } else {
        this.id = null;
      }
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      group: new FormControl({value: 1}, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    })
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let user = this.muserService.getOneById(this.id);
        this.user = await user;
      } catch (error) {
        console.log(error); 
      }
      this.userForm.patchValue({
        name: this.user.name,
        surname: this.user.surname,
        patronymic: this.user.patronymic,
        phone: this.user.phone,
        email: this.user.email,
        group: this.group,
        date: this.user.date
      })
    }
  }

  async onDelete() {
    try {
      await this.muserService.deleteOneByid(this.id);
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(['/users']);
  }

  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.muserService.putOne(this.id, this.userForm.value);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let res = await this.muserService.postOne(this.userForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (error) {
        console.log(error);
      }
    }
  }

}

