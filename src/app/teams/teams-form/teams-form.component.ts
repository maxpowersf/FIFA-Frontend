import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Confederation } from 'src/app/confederations/confederation.model';

@Component({
  selector: 'app-teams-form',
  templateUrl: './teams-form.component.html',
  styleUrls: ['./teams-form.component.css']
})
export class TeamsFormComponent implements OnInit {

  isEditing: boolean = false;
  teamForm: FormGroup;

  team: Team = new Team();

  confederations: Confederation[];

  get name() { return this.teamForm.get('name'); }
  get confederation() { return this.teamForm.get('confederation'); }
  get actualrank() { return this.teamForm.get('actualrank'); }
  get totalpoints() { return this.teamForm.get('totalpoints'); }

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.teamForm = this.modelCreate();

    this.confederations = this.route.snapshot.data.confederations;

    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.team = this.route.snapshot.data.team;
      this.name.patchValue(this.team.name);
      this.confederation.patchValue(this.team.confederationID);
      this.actualrank.patchValue(this.team.actualRank);
      this.totalpoints.patchValue(this.team.totalPoints);
    }
  }

  goToList = () => this.isEditing
    ? this.router.navigate(['../../'], { relativeTo: this.route })
    : this.router.navigate(['../'], { relativeTo: this.route })

    modelCreate = () => this.fb.group({
      name: ['', Validators.required],
      confederation: ['', Validators.required],
      actualrank: [''],
      totalpoints: ['']
    })
  
  onSubmit = () => {
    if (!this.teamForm.valid) { return; }
    const teamModified = new Team();
    teamModified.id = this.team.id;
    teamModified.name = this.name.value;
    teamModified.confederationID = this.confederation.value;
    teamModified.actualRank = this.actualrank.value;
    teamModified.totalPoints = this.totalpoints.value;
    teamModified.lowestRank = this.actualrank.value;
    teamModified.highestRank = this.actualrank.value;

    this.isEditing
    ? this.teamService.update(teamModified)
      .subscribe(this.goToList)
    : this.teamService.add(teamModified)
      .subscribe(this.goToList);
  }
}
