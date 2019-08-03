import { Component, OnInit } from '@angular/core';
import { TournamentType } from '../tournamenttype.model';
import { TournamenttypeService } from '../tournamenttype.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TableLayout } from 'src/app/shared/models/table-layout.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tournamenttype-list',
  templateUrl: './tournamenttype-list.component.html',
  styleUrls: ['./tournamenttype-list.component.css']
})
export class TournamenttypeListComponent implements OnInit {

  headerRows = ['id', 'name'];

  data: TournamentType[];
  tableData: TableLayout;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamenttypeService: TournamenttypeService
  ) {
    this.data = this.route.snapshot.data.tournamenttypes;
  }

  ngOnInit() {
    this.tableData = {
      title: 'Tipos de Torneo',
      canEdit: true,
      canRemove: true,
      data: this.data,
      functionRemove: this.onDelete,
      headerRows: this.headerRows
    }
  }

  onDelete = (id: number) => {
    this.tournamenttypeService.delete(id)
      .pipe(switchMap(this.updateDataTable))
      .subscribe(res => {
        console.log(res);
        this.tableData.data = res;
        this.tableData = { ...this.tableData }
      });
  }

  updateDataTable = () => this.tournamenttypeService.getAll();
}
