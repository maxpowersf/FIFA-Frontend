import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Match } from '../../matches/models/match.model';
import { MatchService } from '../../matches/services/match.service';
import { MatchRoundMapping } from '../../shared/models/matchround';
import { Team } from '../../teams/models/team.model';
import { H2H } from '../models/h2h.model';
import { Head2headService } from '../services/head2head.service';

@Component({
  selector: 'app-head2head-detail',
  templateUrl: './head2head-detail.component.html',
  styleUrls: ['./head2head-detail.component.css']
})
export class Head2headDetailComponent implements OnInit {

  searchForm: FormGroup;
  matchrounds = MatchRoundMapping;

  teams: Team[];
  h2h: H2H[] = [];
  matches: Match[] = [];

  selTeam1: Team;
  selTeam2: Team;

  get team1() { return this.searchForm.get('team1'); }
  get team2() { return this.searchForm.get('team2'); }
  get worldcup() { return this.searchForm.get('worldcup'); }

  displayedColumns: string[] = ['team2', 'confederation', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst', 'goalDifference'];
  displayedColumnsMatches: string[] = ['year', 'date', 'tournament', 'group', 'team1', 'goalsTeam1', 'divider', 'goalsTeam2', 'team2'];

  dataSource;
  dataSourceMatches;

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('paginator', null) paginator: MatPaginator;
  @ViewChild('paginatorMatches', null) paginatorMatches: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private matchService: MatchService,
    private h2hService: Head2headService
  ) { }

  ngOnInit() {
    this.searchForm = this.modelCreate();

    this.teams = this.route.snapshot.data.teams;

    this.createDataSource([], []);
  }

  modelCreate = () => this.fb.group({
    team1: ['', Validators.required],
    team2: [''],
    worldcup: [false]
  });

  createDataSource = (h2h, matches) => {
    this.dataSource = new MatTableDataSource(h2h);
    this.dataSource.paginator = this.paginator;

    this.dataSourceMatches = new MatTableDataSource(matches);
    this.dataSourceMatches.paginator = this.paginatorMatches;
  }

  refresh = (data, type: string) => {
    if (type == "h2h") {
      this.dataSource.data = data;
    }
    else if (type == "matches") {
      this.dataSourceMatches.data = data;
    }

    this.blockUI.stop();
  }

  swapTeams = () => {
    let team1 = this.team1.value;
    let team2 = this.team2.value;

    if (team1 != "" && team2 != "") {
      this.team1.setValue(team2);
      this.team2.setValue(team1);
    }
  }

  onSubmit = () => {
    if (!this.searchForm.valid) {
      this.snackBar.open('Complete todos los campos', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      return;
    }

    this.blockUI.start("1");

    this.selTeam1 = this.teams.find((e) => e.id == this.team1.value);
    this.selTeam2 = this.teams.find((e) => e.id == this.team2.value);

    if (this.team2.value == "") {
      this.h2hService.getByTeam(this.team1.value, this.worldcup.value)
        .subscribe((res) => {
          this.h2h = res;

          this.refresh(this.h2h, 'h2h');
        });
    }
    else {
      this.h2hService.getByTeams(this.team1.value, this.team2.value, this.worldcup.value)
        .subscribe((res) => {
          this.h2h = [];

          if(res != null){
            this.h2h.push(res);
          }

          this.refresh(this.h2h, 'h2h');
        });

      this.matchService.getByTeams(this.team1.value, this.team2.value, this.worldcup.value)
        .subscribe((res) => {
          this.matches = res;

          this.refresh(this.matches, 'matches');
        });
    }
  }

}
