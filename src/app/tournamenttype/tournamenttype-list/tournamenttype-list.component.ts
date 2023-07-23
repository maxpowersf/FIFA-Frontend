import { Component, OnInit, ViewChild } from '@angular/core';
import { TournamentType } from '../models/tournamenttype.model';
import { TournamenttypeService } from '../services/tournamenttype.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tournamenttype-list',
  templateUrl: './tournamenttype-list.component.html',
  styleUrls: ['./tournamenttype-list.component.css']
})
export class TournamenttypeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'matchtypeName', 'formatName', 'confederationName', 'noTeams', 'actions'];
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

  navigateToDetail = (id) => this.router.navigate([id, 'history'], { relativeTo: this.route });

  onDelete = (id: number) => {
    this.tournamenttypeService.delete(id)
      .pipe(switchMap(this.updateDataTable))
      .subscribe(res => {
        this.data = res;
        this.dataSource.data = this.data;
      });
  }

  updateDataTable = () => this.tournamenttypeService.getAll();
}
