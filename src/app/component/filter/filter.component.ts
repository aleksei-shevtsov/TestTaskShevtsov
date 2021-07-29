import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public queryString: any;
  // @Output() searchText = new EventEmitter<string>();

  constructor() { 
    this.queryString = '' 
   }

  ngOnInit(): void {
  }

}
