import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.model';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/teams/models/team.model';
import { TeamService } from 'src/app/teams/services/team.service';
import { MatSnackBar } from '@angular/material';
import { Position } from '../models/position.model';
import { PositionService } from '../services/position.service';
import { PositionsArray } from '../models/positionsArray.model';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService,
    private positionService: PositionService,
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
    teamp: [''],
    wins: [0, Validators.required],
    draws: [0, Validators.required],
    loses: [0, Validators.required],
    favor: [0, Validators.required],
    against: [0, Validators.required],
    pos: [0],
    group: [''],
    round: [''],
    qualified: [0]
  });

  onSubmit = () => {
    if (!this.positionsForm.valid) { 
      this.snackBar.open('Complete todos los campos', '', { 
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });

      return; 
    }

    const positions: PositionsArray = new PositionsArray();
    const teamsPositions = this.positionsForm.get('teamsPositions') as FormArray;
    teamsPositions.controls.forEach((element, index) => {
      if(element.get('teamp').value != "") {
        positions.position.push(this.processTeamPositions(element, index));
      }
    });

    this.positionService.add(positions)
      .subscribe(this.goToList);
  }

  processTeamPositions = (teamPosition: AbstractControl, index: number) => {
    let position: Position = new Position();
    position.tournamentId = this.tournament.id;
    position.teamId = teamPosition.get('teamp').value;
    position.noPosition = index + 1;
    position.wins = teamPosition.get('wins').value;
    position.draws = teamPosition.get('draws').value;
    position.loses = teamPosition.get('loses').value;
    position.gamesPlayed = position.wins + position.draws + position.loses;
    position.goalsFavor = teamPosition.get('favor').value;
    position.goalsAgainst = teamPosition.get('against').value;

    if(this.isQualification) {
      position.noPosition = teamPosition.get('pos').value;
      position.group = teamPosition.get('group').value;
      position.round = teamPosition.get('round').value;
      position.qualified = teamPosition.get('qualified').value;
    }

    position.result = this.getTeamResult(position);

    return position;
  }

  getTeamResult = (position: Position) => {
    if(this.isQualification) {
      switch(position.round) {
        case "1":
          return "Primera Ronda";
        case "2":
          return "Segunda Ronda";
        case "3":
          return "Tercera Ronda";
      }
    }
    else {
      let positionText: string = "";
      switch(position.noPosition) {
        case 1:
          positionText = "Campeón";
          break;
        case 2:
          positionText = "Sub Campeón";
          break;
        case 3:
          if(this.tournament.noOfTeams < 8) {
            positionText = "Grupos";
          }
          else {
            positionText = "Tercero";
          }
          break;
        case 4:
          if(this.tournament.noOfTeams < 8) {
            positionText = "Grupos";
          }
          else {
            positionText = "Cuarto";
          }
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          if(this.tournament.noOfTeams > 8) {
            positionText = "Cuartos de Final";
          }
          else {
            positionText = "Grupos";
          }
          break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
          if(this.tournament.noOfTeams > 16) {
            positionText = "Octavos de Final";
          }
          else {
            positionText = "Grupos";
          }
          break;
        default:
          positionText = "Grupos";
      }
      return positionText;
    }
  }

  goToList = () => this.router.navigate(['tournaments']);

}
