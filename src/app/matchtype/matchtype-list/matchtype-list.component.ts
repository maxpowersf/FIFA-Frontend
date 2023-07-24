import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchType } from '../models/matchtype.model';
import { MatchtypeService } from '../services/matchtype.service';
import { TableLayout } from 'src/app/shared/models/table-layout.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-matchtype-list',
  templateUrl: './matchtype-list.component.html',
  styleUrls: ['./matchtype-list.component.css'],
})
export class MatchtypeListComponent implements OnInit {
  headerRows = ['id', 'name', 'weight'];

  data: MatchType[];
  tableData: TableLayout;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchtypeService: MatchtypeService,
  ) {
    this.data = this.route.snapshot.data.matchtypes;
  }

  ngOnInit() {
    this.tableData = {
      title: 'Match Types',
      canEdit: true,
      canRemove: true,
      data: this.data,
      functionRemove: this.onDelete,
      headerRows: this.headerRows,
    };
  }

  onDelete = (id: number) => {
    this.matchtypeService
      .delete(id)
      .pipe(switchMap(this.updateDataTable))
      .subscribe((res) => {
        this.data = res;
        this.tableData.data = this.data;
      });
  };

  updateDataTable = () => this.matchtypeService.getAll();
}
