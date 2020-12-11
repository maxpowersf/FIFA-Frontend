import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchType } from 'src/app/matchtype/models/matchtype.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/teams/models/team.model';
import { MatSnackBar } from '@angular/material';
import { Match } from '../models/match.model';
import { RankingService } from '../services/ranking.service';
import { TournamentType } from 'src/app/tournamenttype/models/tournamenttype.model';
import { Tournament } from 'src/app/tournaments/models/tournament.model';
import { TournamentService } from 'src/app/tournaments/services/tournament.service';
import { Confederation } from 'src/app/confederations/models/confederation.model';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';

@Component({
  selector: 'app-rankings-match',
  templateUrl: './rankings-match.component.html',
  styleUrls: ['./rankings-match.component.css']
})
export class RankingsMatchComponent implements OnInit {

  matchForm: FormGroup;

  matchtypes: MatchType[];
  tournamenttypes: TournamentType[];
  confederations: Confederation[];
  tournaments: Tournament[] = [];
  teams: Team[];

  match: Match;

  selectedTournamentType: number = 0;
  selectedTeam1: Team;
  selectedTeam2: Team;

  @ViewChild('teamField', { read: ElementRef, static: false }) team1Field: ElementRef;

  get date() { return this.matchForm.get('date'); }
  get matchtype() { return this.matchForm.get('matchtype'); }
  get tournament() { return this.matchForm.get('tournament'); }
  get team1() { return this.matchForm.get('team1'); }
  get team2() { return this.matchForm.get('team2'); }
  get goals1() { return this.matchForm.get('goals1'); }
  get goals2() { return this.matchForm.get('goals2'); }
  get penalties1() { return this.matchForm.get('penalties1'); }
  get penalties2() { return this.matchForm.get('penalties2'); }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rankingService: RankingService,
    private tournamentService: TournamentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.matchForm = this.modelCreate();

    this.matchtypes = this.route.snapshot.data.matchtypes;
    this.tournamenttypes = this.route.snapshot.data.tournamenttypes;
    this.confederations = this.route.snapshot.data.confederations;
    this.teams = this.route.snapshot.data.teams;
  }

  modelCreate = () => this.fb.group({
    date: ['', Validators.required],
    matchtype: ['', Validators.required],
    tournament: ['', Validators.required],
    team1: ['', Validators.required],
    team2: ['', Validators.required],
    goals1: [0, Validators.required],
    goals2: [0, Validators.required],
    penalties1: [0],
    penalties2: [0]
  });

  fillTournamentsByTournamentType = (val) => {
    this.tournaments = [];
    this.selectedTournamentType = val;

    let tournamenttype = this.tournamenttypes.find(x => x.id == val);
    if (tournamenttype.format != TournamentFormat.Qualification) {
      this.tournamentService.getAllByTournamentTypeAndConfederation(val, 0)
        .subscribe((res) => {
          this.tournaments = res;
        });
    }
  }

  fillTournamentsByConfederation = (val) => {
    this.tournaments = [];

    this.tournamentService.getAllByTournamentTypeAndConfederation(this.selectedTournamentType, val)
      .subscribe((res) => {
        this.tournaments = res;
      });
  }

  changeTeam1 = (val) => {
    let t1 = this.teams.find(x => x.id == val);
    this.selectedTeam1 = t1;
  }

  changeTeam2 = (val) => {
    let t2 = this.teams.find(x => x.id == val);
    this.selectedTeam2 = t2;
  }

  resetMatch = () => {
    this.team1.patchValue('');
    this.team2.patchValue('');
    this.goals1.patchValue(0);
    this.goals2.patchValue(0);
  }

  goToList = () => this.router.navigate(['../'], { relativeTo: this.route });

  onSubmit = () => {
    if (!this.matchForm.valid) {
      this.snackBar.open('Complete todos los campos', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      return;
    }

    const newMatch = new Match();
    newMatch.date = this.date.value;
    newMatch.matchTypeId = this.matchtype.value;
    newMatch.tournamentId = this.tournament.value;
    newMatch.team1Id = this.selectedTeam1.id;
    newMatch.team2Id = this.selectedTeam2.id;
    newMatch.goalsTeam1 = this.goals1.value;
    newMatch.goalsTeam2 = this.goals2.value;
    newMatch.penaltiesTeam1 = this.penalties1.value;
    newMatch.penaltiesTeam2 = this.penalties2.value;

    this.rankingService.add(newMatch)
      .subscribe(() => {
        this.resetMatch();
        this.team1Field.nativeElement.focus();
      });
  }
}
