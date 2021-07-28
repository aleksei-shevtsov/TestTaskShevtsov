import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableWithFilterComponent } from './component/table-with-filter/table-with-filter.component';
import { TableComponent } from './component/table/table.component';
import { FilterComponent } from './component/filter/filter.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableWithFilterComponent,
    TableComponent,
    FilterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
