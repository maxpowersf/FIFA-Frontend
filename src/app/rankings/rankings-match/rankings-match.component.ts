import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatchType } from 'src/app/matchtype/matchtype.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/teams/team.model';
import { MatSnackBar } from '@angular/material';
import { Match } from '../match.model';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-rankings-match',
  templateUrl: './rankings-match.component.html',
  styleUrls: ['./rankings-match.component.css']
})
export class RankingsMatchComponent implements OnInit {

  matchForm: FormGroup;

  matchtypes: MatchType[];
  teams: Team[];
  // filteredTeams: Observable<Team[]>;

  match: Match;

  isCalculated: boolean = false;
  matchtypeWeight: number = 0;
  trRegional: number = 0;
  selectedTeam1: Team;
  selectedTeam2: Team;
  oposition1: number = 0;
  oposition2: number = 0;
  points1: number = 0;
  points2: number = 0;

  @ViewChild('teamField', {read: ElementRef, static: false}) team1Field: ElementRef;

  get matchtype() { return this.matchForm.get('matchtype'); }
  get team1() { return this.matchForm.get('team1'); }
  get team2() { return this.matchForm.get('team2'); }
  get result1() { return this.matchForm.get('result1'); }
  get result2() { return this.matchForm.get('result2'); }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rankingService: RankingService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.matchForm = this.modelCreate();

    this.matchtypes = this.route.snapshot.data.matchtypes;
    this.teams = this.route.snapshot.data.teams;

    // this.filteredTeams = this.team1.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(team => team ? this._filterTeams(team) : this.teams.slice())
    //   );
  }

  modelCreate = () => this.fb.group({
    matchtype: ['', Validators.required],
    team1: ['', Validators.required],
    team2: ['', Validators.required],
    result1: [0, Validators.required],
    result2: [0, Validators.required]
  });

  changeMatchType = (val) => {
    let matchtype = this.matchtypes.find(x => x.id == val);
    this.matchtypeWeight = matchtype.weight;
  }

  changeTeam1 = (val) => {
    let t1 = this.teams.find(x => x.id == val);
    this.selectedTeam1 = t1;
    this.oposition2 = (200 - this.selectedTeam1.actualRank) / 100;

    if(this.selectedTeam1 && this.selectedTeam2){
      this.trRegional = (this.selectedTeam1.confederationWeight + 
                          this.selectedTeam2.confederationWeight) / 2;
    }
  }

  changeTeam2 = (val) => {
    let t2 = this.teams.find(x => x.id == val);
    this.selectedTeam2 = t2;
    this.oposition1 = (200 - this.selectedTeam2.actualRank) / 100;

    if(this.selectedTeam1 && this.selectedTeam2){
      this.trRegional = (this.selectedTeam1.confederationWeight + 
                          this.selectedTeam2.confederationWeight) / 2;
    }
  }

  calculate = () => {
    if(!this.matchForm.valid) {
      this.snackBar.open('Complete todos los campos', '', { 
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      this.isCalculated = false;

      return;
    }

    this.points1 = (this.result1.value *
                    this.matchtypeWeight *
                    this.oposition1 *
                    this.trRegional) * 100;

    this.points2 = (this.result2.value *
                    this.matchtypeWeight *
                    this.oposition2 * 
                    this.trRegional) * 100;

    this.isCalculated = true;
  }

  // private _filterTeams(value: string): Team[] {
  //   const filterValue = value.toLowerCase();

  //   return this.teams.filter(team => team.name.toLowerCase().indexOf(filterValue) === 0);
  // }

  resetMatch = () => {
    this.team1.patchValue('');
    this.team2.patchValue('');
    this.result1.patchValue(0);
    this.result2.patchValue(0);
  }

  goToList = () => this.router.navigate(['../'], { relativeTo: this.route });

  onSubmit = () => {
    if (!this.matchForm.valid || !this.isCalculated) { 
      this.snackBar.open('Complete todos los campos', '', { 
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      return; 
    }

    const newMatch = new Match();
    newMatch.team1Id = this.selectedTeam1.id;
    newMatch.team1Points = Number(this.points1.toFixed(0));
    newMatch.team2Id = this.selectedTeam2.id;
    newMatch.team2Points = Number(this.points2.toFixed(0));

    this.rankingService.add(newMatch)
      .subscribe(() => {
        this.resetMatch();
        this.team1Field.nativeElement.focus();
      });
  }
}
