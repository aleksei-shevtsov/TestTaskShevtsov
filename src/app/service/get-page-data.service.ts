import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PolicyService } from './policy.service';


@Injectable({
  providedIn: 'root'
})
export class GetPageDataService  {

  public policies: any;
  public data: any;

  public pageSize: number = 10;
  public pageNumber = 1;

  constructor(private policyService: PolicyService) { }


  getPageData(data: any): Observable<{ [key: string]: any } []>{
    this.policies = data;
    return of(this.policies.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize))
  }

  prev() {
   if(this.pageNumber > 1) {
     this.pageNumber= this.pageNumber - 1;
    //  this.getPageData().subscribe(res => console.log(res))
   }
   return this.getPageData(this.policies)
  }

  forward() {
    const pageCount = this.policies.length / this.pageSize;
    if(this.pageNumber < pageCount) {
      this.pageNumber= this.pageNumber + 1;
      // this.getPageData().subscribe(res => console.log(res))
    }
   return this.getPageData(this.policies)
  }
}
