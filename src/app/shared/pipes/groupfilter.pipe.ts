import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupfilter'
})
export class GroupfilterPipe implements PipeTransform {

  transform(users: {section: number}[], section: number): any[] {
    return users.filter((user) => user.section == section);
  }

}
