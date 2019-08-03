import { Component, OnInit } from '@angular/core';
import { Tournament } from '../tournament.model';
import { TableLayout } from 'src/app/shared/models/table-layout.model';
import { TournamentService } from '../tournament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {

  headerRows = ['id', 'year', 'host', 'tournamentTypeName', 'noOfTeams', 'confederationName'];

  data: Tournament[];
  tableData: TableLayout;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamentService: TournamentService
  ) {
    this.data = this.route.snapshot.data.tournaments;
  }

  ngOnInit() {
    this.tableData = {
      title: 'Torneos',
      canEdit: true,
      canRemove: true,
      data: this.data,
      functionRemove: this.onDelete,
      headerRows: this.headerRows
    }
  }

  onDelete = (id: number) => {
    this.tournamentService.delete(id)
      .pipe(switchMap(this.updateDataTable))
      .subscribe(res => {
        console.log(res);
        this.tableData.data = res;
        this.tableData = { ...this.tableData }
      });
  }

  updateDataTable = () => this.tournamentService.getAll();
}
