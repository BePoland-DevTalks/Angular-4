import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  counter = 0;
  counter2 = 1;
  columnNames = ['Id', 'Name', 'Email', 'Age'];
  tableData: any[];

  constructor(private ttt: HttpService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.ttt.getData()
      .subscribe(
        (data: any) => {
          this.tableData = data;
        },
        (error) => console.log(error)
      );
  }

  increment() {
    this.counter += 1;
  }
}
