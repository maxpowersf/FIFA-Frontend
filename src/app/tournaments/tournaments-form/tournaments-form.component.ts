import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormLayout } from 'src/app/shared/models/form-layout.model';
import { Tournament } from '../models/tournament.model';
import { TournamentService } from '../services/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Confederation } from 'src/app/confederations/confederation.model';
import { TournamentType } from 'src/app/tournamenttype/tournamenttype.model';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournaments-form.component.html',
  styleUrls: ['./tournaments-form.component.css']
})
export class TournamentsFormComponent implements OnInit {

  tournamentForm: FormGroup;
  formInfo: FormLayout;

  isEditing: boolean
  tournament: Tournament = new Tournament();

  tournamenttypes: TournamentType[];
  confederations: Confederation[];

  get name() { return this.tournamentForm.get('name') };
  get year() { return this.tournamentForm.get('year') };
  get host() { return this.tournamentForm.get('host') };
  get noOfTeams() { return this.tournamentForm.get('noOfTeams') };
  get tournamentType() { return this.tournamentForm.get('tournamentType') };
  get confederation() { return this.tournamentForm.get('confederation') };

  constructor(
    private fb: FormBuilder,
    private tournamentService: TournamentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tournamentForm = this.modelCreate();

    this.tournamenttypes = this.route.snapshot.data.tournamenttypes;
    this.confederations = this.route.snapshot.data.confederations;
    
    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.formInfo = {
        submitText: 'Update',
        title: 'Tournament',
        subtitle: 'Edit tournament',
        isEditing: true
      }
      this.tournament = this.route.snapshot.data.tournament;
      this.name.patchValue(this.tournament.name);
      this.year.patchValue(this.tournament.year);
      this.host.patchValue(this.tournament.host);
      this.noOfTeams.patchValue(this.tournament.noOfTeams);
      this.tournamentType.patchValue(this.tournament.tournamentTypeID);
      this.confederation.patchValue(this.tournament.confederationID);
    }
    else {
      this.formInfo = {
        submitText: 'Save',
        title: 'Tournament',
        subtitle: 'Create tournament',
        isEditing: false
      }
    }
  }

  modelCreate = () => this.fb.group({
    name: ['', Validators.required],
    year: ['', Validators.required],
    host: ['', Validators.required],
    noOfTeams: ['', Validators.required],
    tournamentType: ['', Validators.required],
    confederation: ['']
  });

  onSubmit = () => {
    if (!this.tournamentForm.valid) return;
    const tournamentModified = new Tournament();
    tournamentModified.id = this.tournament.id;
    tournamentModified.name = this.name.value;
    tournamentModified.year = this.year.value;
    tournamentModified.host = this.host.value;
    tournamentModified.noOfTeams = this.noOfTeams.value;
    tournamentModified.tournamentTypeID = this.tournamentType.value;
    tournamentModified.confederationID = this.confederation.value;
    
    this.isEditing 
    ? this.tournamentService.update(tournamentModified)
      .subscribe(this.goToList) 
    : this.tournamentService.add(tournamentModified)
      .subscribe(this.goToList)
  }

  goToList = () => this.router.navigate(['tournaments']);
}
