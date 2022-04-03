import { Component, OnInit } from '@angular/core';
import { TableResponse, TableService } from '../table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
  tablesDistinct!: TableResponse[];
  tablesRepeated!: TableResponse[];
  selectedColumn: string = '';

  constructor(private tableService: TableService) {}

  ngOnInit(): void {}
  selectChangeHandler(event: any) {
    switch (event.target.value) {
      case 'column-1':
        this.tableService
          .getKolumna1Distinct()
          .subscribe((a) => (this.tablesDistinct = a));
          this.tableService
          .getKolumna1Repeated()
          .subscribe((a) => (this.tablesRepeated = a));
        break;
      case 'column-2':
        this.tableService
          .getKolumna2Distinct()
          .subscribe((a) => (this.tablesDistinct = a));
          this.tableService
          .getKolumna2Repeated()
          .subscribe((a) => (this.tablesRepeated = a));
        break;
      case 'column-3':
        this.tableService
          .getKolumna3Distinct()
          .subscribe((a) => (this.tablesDistinct = a));
          this.tableService
          .getKolumna2Repeated()
          .subscribe((a) => (this.tablesRepeated = a));
        break;
      case 'column-4':
        this.tableService
          .getKolumna4Distinct()
          .subscribe((a) => (this.tablesDistinct = a));
          this.tableService
          .getKolumna4Repeated()
          .subscribe((a) => (this.tablesRepeated = a));
        break;
    }
  }
}
