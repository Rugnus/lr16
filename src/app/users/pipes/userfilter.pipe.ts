import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(
    workers: { name: string; surname: string }[],
    searchStr: string
  ): any[] {
    let str = searchStr.split(' ');
    if (str[0] && !str[1]) {
      return workers.filter(
        (worker) => !worker.name.toLowerCase().indexOf(str[0].toLowerCase())
      );
    }
    if (str[0] && str[1]) {
      let filtredWorkers = workers.filter(
        (worker) =>
          worker.name.toLowerCase().indexOf(str[0].toLowerCase()) !== -1
      );
      return filtredWorkers.filter(
        (worker) =>
          worker.surname.toLowerCase().indexOf(str[1].toLowerCase()) !== -1
      );
    }
    return workers;
  }

}
