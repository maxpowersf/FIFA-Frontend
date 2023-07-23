import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/teams/models/team.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Match } from '../../matches/models/match.model';
import { RankingService } from '../services/ranking.service';
import { TournamentType } from 'src/app/tournamenttype/models/tournamenttype.model';
import { Tournament } from 'src/app/tournaments/models/tournament.model';
import { TournamentService } from 'src/app/tournaments/services/tournament.service';
import { Confederation } from 'src/app/confederations/models/confederation.model';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';
import { MatchRoundMapping } from 'src/app/shared/models/matchround';
import { TeamService } from 'src/app/teams/services/team.service';

@Component({
  selector: 'app-rankings-match',
  templateUrl: './rankings-match.component.html',
  styleUrls: ['./rankings-match.component.css']
})
export class RankingsMatchComponent implements OnInit {

  matchForm: UntypedFormGroup;

  tournamenttypes: TournamentType[];
  confederations: Confederation[];
  tournaments: Tournament[] = [];
  teams: Team[];
  matchrounds;

  match: Match;

  selectedTournamentType: number = 0;
  selectedTeam1: Team;
  selectedTeam2: Team;

  @ViewChild('roundField', { read: ElementRef }) roundField: ElementRef;

  get date() { return this.matchForm.get('date'); }
  get tournament() { return this.matchForm.get('tournament'); }
  get matchround() { return this.matchForm.get('matchround'); }
  get group() { return this.matchForm.get('group'); }
  get matchday() { return this.matchForm.get('matchday'); }
  get team1() { return this.matchForm.get('team1'); }
  get team2() { return this.matchForm.get('team2'); }
  get goals1() { return this.matchForm.get('goals1'); }
  get goals2() { return this.matchForm.get('goals2'); }
  get penalties1() { return this.matchForm.get('penalties1'); }
  get penalties2() { return this.matchForm.get('penalties2'); }

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rankingService: RankingService,
    private tournamentService: TournamentService,
    private teamService: TeamService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.matchForm = this.modelCreate();

    this.tournamenttypes = this.route.snapshot.data.tournamenttypes;
    this.confederations = this.route.snapshot.data.confederations;
    this.matchrounds = MatchRoundMapping;
    this.teams = this.route.snapshot.data.teams;
  }

  modelCreate = () => this.fb.group({
    date: ['', Validators.required],
    tournament: ['', Validators.required],
    matchround: ['', Validators.required],
    group: [''],
    matchday: [''],
    team1: ['', Validators.required],
    team2: ['', Validators.required],
    goals1: ['', Validators.required],
    goals2: ['', Validators.required],
    penalties1: [0],
    penalties2: [0]
  });

  isNumber(val): boolean { return typeof val === 'number'; }

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

  fillTeamsByTournament = (val) => {
    let tournament = this.tournaments.find(x => x.id == val);
    if (tournament.confederationID != null &&
      tournament.confederationID != 5 &&
      (tournament.confederationID != 4 || (tournament.confederationID == 4 && tournament.tournamentType.format == TournamentFormat.Qualification))) {
      this.teamService.getAllByConfederation(tournament.confederationID)
        .subscribe((res) => {
          this.teams = res;
        });
    }
    else {
      this.teamService.getAll()
        .subscribe((res) => {
          if (tournament.host == "America" || tournament.confederationID == 4) {
            this.teams = res.filter(s => s.confederationID == 3 || s.confederationID == 4);
          }
          else {
            this.teams = res;
          }
        });
    }
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
    this.group.patchValue('');
    this.matchday.patchValue('');
    this.team1.patchValue('');
    this.team2.patchValue('');
    this.goals1.patchValue(0);
    this.goals2.patchValue(0);
    this.penalties1.patchValue(0);
    this.penalties2.patchValue(0);
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
    newMatch.tournamentId = this.tournament.value;
    newMatch.matchRoundId = this.matchround.value;
    newMatch.group = this.group.value;
    newMatch.matchday = this.matchday.value;
    newMatch.team1Id = this.selectedTeam1.id;
    newMatch.team2Id = this.selectedTeam2.id;
    newMatch.goalsTeam1 = this.goals1.value;
    newMatch.goalsTeam2 = this.goals2.value;
    newMatch.penaltiesTeam1 = this.penalties1.value;
    newMatch.penaltiesTeam2 = this.penalties2.value;

    this.rankingService.add(newMatch)
      .subscribe(() => {
        this.resetMatch();
        this.roundField.nativeElement.focus();
      });
  }
}
