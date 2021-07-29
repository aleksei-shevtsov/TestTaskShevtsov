import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterdata'
})
export class SearchPipe implements PipeTransform {


  transform(properties: any[], inputValue: string, label: string): any[] {
    if (!properties) { return []; }
    if (!inputValue) { return  properties; }
    if (inputValue === '' || inputValue === null) { return []; }
    return properties.filter(e => {
      if (typeof e[label] === 'string') {
        return e[label].toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
      } else {
        return e[label].toString().indexOf(inputValue) > -1;
      }
      });
  }
}
