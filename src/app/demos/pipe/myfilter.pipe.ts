import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(m => m <= 300);
  }

}
