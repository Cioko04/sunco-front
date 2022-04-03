import { Component, Input, OnInit } from '@angular/core';
import { TableResponse, TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  table!: TableResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
