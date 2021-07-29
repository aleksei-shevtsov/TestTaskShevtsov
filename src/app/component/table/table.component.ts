import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { IPolicy } from 'src/app/interface/Ipolicy';
import { GetPageDataService } from 'src/app/service/get-page-data.service';
import { Observable, of } from 'rxjs';
import { first, mergeMap, tap, map } from "rxjs/operators";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[GetPageDataService]
})
export class TableComponent implements OnInit {

    public policies: any;
    public data: any;
    public properties: any;
    public queryString: any;

    // { [key: string]: any; } = []
  
    constructor(private policyService: PolicyService, private getPageDataService: GetPageDataService) { 
      this.queryString = ''
     };

  
    ngOnInit() {
        this.policyService.getPolicies().pipe(
          tap(console.log),
          mergeMap(res => this.getPageDataService.getPageData(res).pipe(
            map(data => {
              this.policies = data;
              this.data = data;
              this.properties = Object.getOwnPropertyNames(data[0])
              return data
            })
          )),
        ).subscribe()
    }
  
    setData(event: any) {
      this.data = event;
      console.log('event', event)
    }
      // this.policyService.getPolicies().subscribe((data : any )=> {
      //   this.policies = data
      //   console.log('ngOnInit data ',data);
      // });
      // this.policyService.getPolicies().subscribe((data: { [key: string]: any; })=> {
      //   this.properties = Object.getOwnPropertyNames(data[0])
      //   this.data = data;
      //   console.log('properties Table', data[0])
      // })
      // console.log('property Table', this.properties);
      // console.log('data Table', this.policies);
    }
