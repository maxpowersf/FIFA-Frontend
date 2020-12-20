import { Component, OnInit, ViewChild } from '@angular/core';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { switchMap } from 'rxjs/operators';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.css']
})
export class TournamentsListComponent implements OnInit {

  displayedColumnsWorldCup: string[] = ['year', 'host', 'tournamentTypeName', 'noOfTeams', 'confederationName', 'actions'];
  displayedColumnsConfederationCup: string[] = ['year', 'host', 'tournamentTypeName', 'noOfTeams', 'confederationName', 'actions'];
  displayedColumnsConfederationTournament: string[] = ['year', 'host', 'tournamentTypeName', 'noOfTeams', 'confederationName', 'actions'];
  displayedColumnsQualification: string[] = ['year', 'host', 'tournamentTypeName', 'noOfTeams', 'confederationName', 'actions'];

  dataSourceWorldCup;
  dataSourceConfederationCup;
  dataSourceConfederationTournament;
  dataSourceQualification;

  tournaments: Tournament[];
  worldCups: Tournament[];
  confederationCups: Tournament[];
  confederationTournaments: Tournament[];
  qualifications: Tournament[];

  @ViewChild('paginatorWorldCup', null) paginatorWorldCup: MatPaginator;
  @ViewChild('paginatorConfederationCup', null) paginatorConfederationCup: MatPaginator;
  @ViewChild('paginatorConfederationTournament', null) paginatorConfederationTournament: MatPaginator;
  @ViewChild('paginatorQualification', null) paginatorQualification: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    this.tournaments = this.route.snapshot.data.tournaments;

    this.mapTournamentsList(this.tournaments);
  }

  mapTournamentsList = (list) => {
    this.worldCups = list.filter(x => x.tournamentType.format == TournamentFormat.WorldCup);
    this.dataSourceWorldCup = new MatTableDataSource(this.worldCups);
    this.dataSourceWorldCup.paginator = this.paginatorWorldCup;

    this.confederationCups = list.filter(x => x.tournamentType.format == TournamentFormat.ConfederationsCup);
    this.dataSourceConfederationCup = new MatTableDataSource(this.confederationCups);
    this.dataSourceConfederationCup.paginator = this.paginatorConfederationCup;

    this.confederationTournaments = list.filter(x => x.tournamentType.format == TournamentFormat.ConfederationTournament);
    this.dataSourceConfederationTournament = new MatTableDataSource(this.confederationTournaments);
    this.dataSourceConfederationTournament.paginator = this.paginatorConfederationTournament;

    this.qualifications = list.filter(x => x.tournamentType.format == TournamentFormat.Qualification);
    this.dataSourceQualification = new MatTableDataSource(this.qualifications);
    this.dataSourceQualification.paginator = this.paginatorQualification;
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  navigateToEdit = (id) => this.router.navigate([id, 'edit'], { relativeTo: this.route });

  navigateToUpload = (id) => this.router.navigate([id, 'positions'], { relativeTo: this.route });

  navigateToDetail = (id) => this.router.navigate([id, 'position'], { relativeTo: this.route });

  onDelete = (id: number) => {
    this.tournamentService.delete(id)
      .pipe(switchMap(this.updateDataTable))
      .subscribe(res => {
        this.tournaments = res;
        this.mapTournamentsList(this.tournaments);
      });
  }

  updateDataTable = () => this.tournamentService.getAll();
}
