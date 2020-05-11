import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/teams/team.model';
import { TeamService } from 'src/app/teams/team.service';
import { debug } from 'util';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tournaments-position',
  templateUrl: './tournaments-position.component.html',
  styleUrls: ['./tournaments-position.component.css']
})
export class TournamentsPositionComponent implements OnInit {

  positionsForm: FormGroup;

  tournament: Tournament = new Tournament();
  teams: Team[];

  isQualification: boolean;

  /*get teamp() { return this.positionsForm.get('teamp'); }
  get wins() { return this.positionsForm.get('wins'); }
  get draws() { return this.positionsForm.get('draws'); }
  get loses() { return this.positionsForm.get('loses'); }
  get favor() { return this.positionsForm.get('favor'); }
  get against() { return this.positionsForm.get('against'); }
  get group() { return this.positionsForm.get('group'); }
  get round() { return this.positionsForm.get('round'); }
  get qualified() { return this.positionsForm.get('qualified'); }*/

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.tournament = this.route.snapshot.data.tournament;
    this.isQualification = (this.tournament.tournamentType.format == 1);

    this.positionsForm = this.generateForm();

    if(this.tournament.confederationID != null){
      this.teamService.getAllByConfederation(this.tournament.confederationID)
        .subscribe((res) => {
          this.teams = res;
        });
    }
    else{
      this.teamService.getAll()
        .subscribe((res) => {
          this.teams = res;
        });
    }
  }

  generateForm = (): FormGroup => {
    let teamsListArray = [];
    for(let i = 0; i < this.tournament.noOfTeams; i++) {
      teamsListArray.push(this.teamModelCreate())
    }

    return this.positionsModelCreate(teamsListArray);
  }

  positionsModelCreate = (teamsArray: FormGroup[] = []) => {
    return this.fb.group({
      teamsPositions: this.fb.array(teamsArray)
    });
  }

  teamModelCreate = () => this.fb.group({
    teamp: ['', Validators.required],
    wins: [0, Validators.required],
    draws: [0, Validators.required],
    loses: [0, Validators.required],
    favor: [0, Validators.required],
    against: [0, Validators.required],
    group: [''],
    round: [0],
    qualified: [0]
  });

  onSubmit = () => {
    console.log('reactiveForm' , this.positionsForm.value);
  }

  goToList = () => this.router.navigate(['tournaments']);

}
