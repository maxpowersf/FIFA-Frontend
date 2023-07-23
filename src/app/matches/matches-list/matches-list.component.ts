import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Confederation } from 'src/app/confederations/models/confederation.model';
import { MatchRoundMapping } from 'src/app/shared/models/matchround';
import { Team } from 'src/app/teams/models/team.model';
import { Tournament } from 'src/app/tournaments/models/tournament.model';
import { TournamentService } from 'src/app/tournaments/services/tournament.service';
import { TournamentType } from 'src/app/tournamenttype/models/tournamenttype.model';
import { Match } from '../models/match.model';
import { MatchesCollectionRequest } from '../models/matchescollectionrequest.model';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  filterForm: UntypedFormGroup;

  teams: Team[];
  confederations: Confederation[];
  tournamentTypes: TournamentType[];
  tournaments: Tournament[];
  matches: Match[];

  matchrounds = MatchRoundMapping;

  displayedColumns: string[] = ['year', 'date', 'tournament', 'group', 'team1', 'goalsTeam1', 'divider', 'goalsTeam2', 'team2'];

  dataSource;

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('paginator', null) paginator: MatPaginator;

  get team1() { return this.filterForm.get('team1'); }
  get team2() { return this.filterForm.get('team2'); }
  get confederation() { return this.filterForm.get('confederation'); }
  get tournamenttype() { return this.filterForm.get('tournamenttype'); }
  get tournament() { return this.filterForm.get('tournament'); }
  get startdate() { return this.filterForm.get('startdate'); }
  get enddate() { return this.filterForm.get('enddate'); }
  get quantity() { return this.filterForm.get('quantity'); }

  constructor(
    private fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private matchService: MatchService,
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    this.filterForm = this.modelCreate();

    this.teams = this.route.snapshot.data.teams;
    this.confederations = this.route.snapshot.data.confederations;
    this.tournamentTypes = this.route.snapshot.data.tournamentTypes;

    this.dataSource = new MatTableDataSource(this.matches);
    this.dataSource.paginator = this.paginator;
  }

  modelCreate = () => this.fb.group({
    team1: [''],
    team2: [''],
    confederation: [0],
    tournamenttype: [0],
    tournament: [0],
    startdate: [''],
    enddate: [''],
    quantity: ['']
  });

  refresh = (data) => {
    this.dataSource.data = data;
  }

  fillTournamentsByTournamentType = (val) => {
    this.tournaments = [];

    this.tournamentService.getAllByTournamentTypeAndConfederation(val, 0)
      .subscribe((res) => {
        this.tournaments = res;
      });
  }

  onSubmit = () => {
    if (!this.filterForm.valid) {
      this.snackBar.open('Complete todos los campos', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      return;
    }

    this.blockUI.start("2");
    let request = new MatchesCollectionRequest();
    request = this.buildRequest(request);
    this.matchService.getAll(request)
      .subscribe((res) => {
        this.matches = res;
        this.refresh(this.matches);
        this.blockUI.stop();
      });
  }

  buildRequest = (request: MatchesCollectionRequest) => {
    if (this.team1.value != '' && this.team1.value != 0) {
      request.team1Id = this.team1.value;
    }
    if (this.team2.value != '' && this.team2.value != 0) {
      request.team2Id = this.team2.value;
    }
    if (this.confederation.value != '' && this.confederation.value != 0) {
      request.confederationId = this.confederation.value;
    }
    if (this.tournamenttype.value != '' && this.tournamenttype.value != 0) {
      request.tournamentTypeId = this.tournamenttype.value;
    }
    if (this.tournament.value != '' && this.tournament.value != 0) {
      request.tournamentId = this.tournament.value;
    }
    if (this.startdate.value != '') {
      request.startDate = this.startdate.value;
    }
    if (this.enddate.value != '') {
      request.endDate = this.enddate.value;
    }
    if (this.quantity.value != '') {
      request.quantity = this.quantity.value;
    }

    return request;
  }

}
