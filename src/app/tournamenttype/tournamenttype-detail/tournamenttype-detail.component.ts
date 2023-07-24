import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/players/models/player.model';
import { PlayerService } from 'src/app/players/services/player.service';
import { Team } from 'src/app/teams/models/team.model';
import { TeamService } from 'src/app/teams/services/team.service';
import { Tournament } from 'src/app/tournaments/models/tournament.model';

import { TournamentType } from '../models/tournamenttype.model';

@Component({
  selector: 'app-tournamenttype-detail',
  templateUrl: './tournamenttype-detail.component.html',
  styleUrls: ['./tournamenttype-detail.component.css'],
})
export class TournamenttypeDetailComponent implements OnInit {
  displayedColumns: string[] = [
    'noPosition',
    'team',
    'confederationName',
    'titles',
  ];
  displayedColumnsHistory: string[] = [
    'tournament',
    'champion',
    'runnerUp',
    'third',
    'fourth',
  ];
  displayedColumnsGoalscorers: string[] = [
    'noPosition',
    'fullName',
    'positionName',
    'team',
    'goals',
  ];

  dataSource;
  dataSourceHistory;
  dataSourceGoalscorers;

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorGoalscorers') paginatorGoalscorers: MatPaginator;

  tournamentType: TournamentType;
  tournamentTypeFormat: number;
  teams: Team[];
  tournaments: Tournament[];
  goalscorers: Player[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private playerService: PlayerService,
  ) {
    this.tournamentType = this.route.snapshot.data.tournamenttype;
    this.tournamentTypeFormat = this.tournamentType.format;
    this.tournaments = this.route.snapshot.data.tournaments;
  }

  ngOnInit() {
    this.getTeams();
    this.getGoalscorers();

    this.dataSourceHistory = new MatTableDataSource(this.tournaments);
  }

  getTeams() {
    this.teamService
      .getTeamsWithTitles(this.tournamentType.id)
      .subscribe((res) => {
        this.teams = res.map((c) => this.mapFromApi(c));

        this.dataSource = new MatTableDataSource(this.teams);
        this.dataSource.paginator = this.paginator;
      });
  }

  getGoalscorers() {
    this.playerService
      .getPlayersWithGoals(this.tournamentType.id)
      .subscribe((res) => {
        this.goalscorers = res.map((c) => this.mapGoalscorersFromApi(c));

        this.dataSourceGoalscorers = new MatTableDataSource(this.goalscorers);
        this.dataSourceGoalscorers.paginator = this.paginatorGoalscorers;
      });
  }

  mapFromApi(element: any) {
    let titles = 0;
    switch (this.tournamentTypeFormat) {
      case 1:
        titles = element.worldCupQualifications;
        break;
      case 2:
        titles = element.confederationTournamentTitles;
        break;
      case 3:
        titles = element.confederationsCupTitles;
        break;
      case 4:
        titles = element.worldCupTitles;
        break;
    }
    return { ...element, titles };
  }

  mapGoalscorersFromApi(element: any) {
    let goals = 0;
    switch (this.tournamentTypeFormat) {
      case 1:
        goals = element.qualificationGoals;
        break;
      case 2:
        goals = element.confederationTournamentGoals;
        break;
      case 3:
        goals = element.confederationsGoals;
        break;
      case 4:
        goals = element.worldCupGoals;
        break;
    }
    return { ...element, goals };
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route });
}
