import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PolicyService } from 'src/app/service/policy.service';
import { GetPageDataService } from 'src/app/service/get-page-data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() change = new EventEmitter<any>();

  constructor(private policyService: PolicyService, private getPageDataService: GetPageDataService) { }

  ngOnInit(): void {
  }

  prev() {
    this.getPageDataService.prev().subscribe(x => this.change.emit(x));
    console.log('prev page');
  }

  forward() {
    this.getPageDataService.forward().subscribe(x => this.change.emit(x));
    console.log('next page');
  }
}
