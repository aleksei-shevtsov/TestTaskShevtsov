import { Input, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';

  
@Pipe({
    name: 'paginationPipe'
})
export class PaginationPipe implements PipeTransform {
  public policies: any;
  public pageSize: number = 10;
  public pageNumber = 1;

  transform(data: any){
    this.policies = data;
    console.log('paginationPipe')
    return this.policies.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize)
  }
}