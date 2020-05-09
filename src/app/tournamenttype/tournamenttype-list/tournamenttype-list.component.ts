import { Component, OnInit, ViewChild } from '@angular/core';
import { TournamentType } from '../tournamenttype.model';
import { TournamenttypeService } from '../tournamenttype.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TableLayout } from 'src/app/shared/models/table-layout.model';
import { switchMap } from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tournamenttype-list',
  templateUrl: './tournamenttype-list.component.html',
  styleUrls: ['./tournamenttype-list.component.css']
})
export class TournamenttypeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'formatName', 'confederationName', 'noTeams', 'actions'];
  dataSource;

  data: TournamentType[];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamenttypeService: TournamenttypeService
  ) {
    this.data = this.route.snapshot.data.tournamenttypes;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  navigateToEdit = (id) => this.router.navigate([id, 'edit'], { relativeTo: this.route });

  navigateToUpload = (id) => this.router.navigate([id, 'champions'], { relativeTo: this.route });

  navigateToDetail = (id) => this.router.navigate([id, 'history'], { relativeTo: this.route });

  onDelete = (id) => this.tournamenttypeService.delete(id).subscribe(this.updateDataTable);

  updateDataTable = () => this.tournamenttypeService.getAll();
}
