import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { GetPageDataService } from 'src/app/service/get-page-data.service';
import { mergeMap, tap, map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [GetPageDataService]
})
export class TableComponent implements OnInit {

    public propertyValueForSearch = '';
    public policies: any;
    public data: any;
    public properties: any;
    public queryString: any;
    public headersOfTable = [{'id':  'ID'}, {'num':  'Ins. Number'}, {'amount': 'Amount'}, {'userType': 'Type of User'}, {'clientId': 'Client ID'}, {'description': 'Description'}];
    public copyOfHeaders: any;
    public headersKey: any = [];
    public headersValue: any = [];

    searchForm = this.fb.group({
      propertiesOfSearch: ['', [Validators.required]],
      idChecker: ['', [Validators.required]]
    });

    constructor(private policyService: PolicyService, private getPageDataService: GetPageDataService, public fb: FormBuilder) {
      this.queryString = '';
    }

    ngOnInit() {
      this.copyOfHeaders = this.headersOfTable;
      this.getHeaders();
        this.policyService.getPolicies().pipe(
          tap(console.log),
          mergeMap(res => {
            this.policies = res;
            return this.getPageDataService.getPageData(res).pipe(
            map(data => {
              this.data = data;
              this.properties = Object.getOwnPropertyNames(data[0]);
              return data;
            })
          ); })
        ).subscribe();
    }

    id_checkBoxChanged(e: any) {
      if (e.target.checked) {
        const found  = this.headersOfTable.find(element => element.id);
        console.log('found', found);
      }
        return console.log('this.headersOfTable', this.headersOfTable);
    }

    getHeaders() {
      for (let i = 0; i < this.headersOfTable.length; i++) {
        this.headersKey.push(Object.getOwnPropertyNames(this.headersOfTable[i]));
        this.headersValue.push(Object.values(this.headersOfTable[i]));
      }
      console.log('this.key', this.headersKey);
      console.log('this.value', this.headersValue);
    }

    setData(event: any) {
      this.data = event;
      console.log('event', event);
    }

    getPropertiesForSearch() {
      return this.searchForm.get('propertiesOfSearch');
    }

    changePropertyInSearch(e: any) {
      this.searchForm.controls.propertiesOfSearch.setValue(e.target.value, {
        onlySelf: true
      });
      this.propertyValueForSearch = e.target.value;
      console.log('this.propertyValueForSearch', this.propertyValueForSearch);
    }
}
