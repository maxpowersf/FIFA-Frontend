import { Component, OnInit, ViewChild } from '@angular/core';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {

  displayedColumns: string[] = ['year', 'host', 'tournamentTypeName', 'noOfTeams', 'confederationName', 'actions'];
  dataSource;

  tournaments: Tournament[];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    this.tournaments = this.route.snapshot.data.tournaments;
    this.dataSource = new MatTableDataSource(this.tournaments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  navigateToEdit = (id) => this.router.navigate([id, 'edit'], { relativeTo: this.route });

  navigateToUpload = (id) => this.router.navigate([id, 'positions'], { relativeTo: this.route });

  navigateToDetail = (id) => this.router.navigate([id, 'position'], { relativeTo: this.route });

  onDelete = (id) => this.tournamentService.delete(id).subscribe(this.updateDataTable);

  updateDataTable = () => this.tournamentService.getAll();
}
