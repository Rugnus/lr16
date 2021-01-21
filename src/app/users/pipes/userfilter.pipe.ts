import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(users: {group: number}[], group: number): any[] {
    return users.filter((user) => user.group == group);
  }

}
