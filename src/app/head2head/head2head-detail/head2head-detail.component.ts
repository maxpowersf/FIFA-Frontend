import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from 'src/app/matches/models/match.model';
import { MatchService } from 'src/app/matches/services/match.service';
import { MatchRoundMapping } from 'src/app/shared/models/matchround';
import { Team } from 'src/app/teams/models/team.model';
import { H2H } from '../models/h2h.model';
import { Head2headService } from '../services/head2head.service';

@Component({
  selector: 'app-head2head-detail',
  templateUrl: './head2head-detail.component.html',
  styleUrls: ['./head2head-detail.component.css']
})
export class Head2headDetailComponent implements OnInit {

  searchForm: FormGroup;

  teams: Team[];
  h2h: H2H;
  matches: Match[];

  matchrounds = MatchRoundMapping;

  get team1() { return this.searchForm.get('team1'); }
  get team2() { return this.searchForm.get('team2'); }

  displayedColumns: string[] = ['year', 'date', 'tournament', 'group', 'team1', 'goals1', 'divider', 'goals2', 'team2'];

  dataSource;

  @ViewChild('paginator', null) paginator: MatPaginator;

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

    this.createDataSource([]);
  }

  modelCreate = () => this.fb.group({
    team1: ['', Validators.required],
    team2: ['']
  });

  createDataSource = (res) => {
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
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

    if (this.team2.value == "") {
      this.matchService.getByTeam(this.team1.value)
        .subscribe((res) => {
          this.createDataSource(res);
        });
    }
    else {
      this.h2hService.getByTeams(this.team1.value, this.team2.value)
        .subscribe((res) => {
          this.h2h = res;
          console.log(res);
        });

      this.matchService.getByTeams(this.team1.value, this.team2.value)
        .subscribe((res) => {
          this.createDataSource(res);
        });
    }
  }

}
