import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpService} from './http.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {HttpModule} from '@angular/http';
import { TableComponent } from './table/table.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
