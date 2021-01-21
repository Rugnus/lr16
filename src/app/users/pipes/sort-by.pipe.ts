import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(workers: { id: number; date: string }[], sortType: string): any[] {
    let worker = workers;
    switch (sortType) {
      case 'higherId':
        worker = worker.sort((a, b) => (a.id > b.id ? 1 : -1));
        break;
      case 'lowerId':
        worker = worker.sort((a, b) => (a.id < b.id ? 1 : -1));
        break;
      case 'higherAge':
        worker = worker.sort((a, b) =>
          this.getAge(a.date) > this.getAge(b.date) ? 1 : -1
        );
        break;
      case 'lowerAge':
        worker = worker.sort((a, b) =>
          this.getAge(a.date) < this.getAge(b.date) ? 1 : -1
        );
        break;
    }
    return worker;
  }

  private getAge(date: string) {
    let a = new Date(date);
    let b = new Date();
    let date_diff = b.getTime() - a.getTime();
    let age = Math.floor(date_diff / 1000 / 60 / 60 / 24 / 365);
    return age;
  }

}
