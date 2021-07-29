import { Input, Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'filterdata'
})
export class SearchPipe implements PipeTransform {
  

  transform(properties: any[], inputValue: string, label:string): any[] {
    if (!properties) return [];
    if (!inputValue) return  properties;
    if (inputValue == '' || inputValue == null) return [];
    return properties.filter(e => e.toLowerCase().indexOf(inputValue) > -1 );
  }

  // transform(policies: any, searchText: string): string {
  // return policies.filter((police: any) => {
  //   console.log(police)
  //   police.id.indexOf(searchText) !== -1;
  //   console.log('searchText ', searchText)
  // });
  
}