import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormLayout } from 'src/app/shared/models/form-layout.model';
import { TournamentType } from '../tournamenttype.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamenttypeService } from '../tournamenttype.service';
import { Confederation } from 'src/app/confederations/confederation.model';
import { TournamentFormatMapping } from 'src/app/shared/models/tournamentformat';

@Component({
  selector: 'app-tournamenttype-form',
  templateUrl: './tournamenttype-form.component.html',
  styleUrls: ['./tournamenttype-form.component.css']
})
export class TournamenttypeFormComponent implements OnInit {
  tournamenttypeForm: FormGroup;
  formInfo: FormLayout;

  isEditing: boolean;
  tournamenttype: TournamentType = new TournamentType();

  formats;
  confederations: Confederation[];

  get name() { return this.tournamenttypeForm.get('name') };
  get format() { return this.tournamenttypeForm.get('format') };
  get confederation() { return this.tournamenttypeForm.get('confederation') };
  get noTeams() { return this.tournamenttypeForm.get('noTeams') };

  constructor(
    private fb: FormBuilder,
    private tournamenttypeService: TournamenttypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tournamenttypeForm = this.modelCreate();

    this.formats = TournamentFormatMapping;
    this.confederations = this.route.snapshot.data.confederations;
    
    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.formInfo = {
        submitText: 'Update',
        title: 'Tournament Type',
        subtitle: 'Edit tournament type',
        isEditing: true
      }

      this.tournamenttype = this.route.snapshot.data.tournamenttype;
      this.name.patchValue(this.tournamenttype.name);
      this.format.patchValue(this.tournamenttype.format);
      this.confederation.patchValue(this.tournamenttype.confederationID);
      this.noTeams.patchValue(this.tournamenttype.noTeams);
    }
    else {
      this.formInfo = {
        submitText: 'Save',
        title: 'Tournament Type',
        subtitle: 'Create tournament type',
        isEditing: false
      }
    }
  }

  modelCreate = () => this.fb.group({
    name: ['', Validators.required],
    format: ['', Validators.required],
    confederation: [''],
    noTeams: ['', Validators.required],
  });

  onSubmit = () => {
    if (!this.tournamenttypeForm.valid) return;
    const tournamenttypeModified = new TournamentType();
    tournamenttypeModified.id = this.tournamenttype.id;
    tournamenttypeModified.name = this.name.value;
    tournamenttypeModified.format = this.format.value;
    tournamenttypeModified.confederationID = this.confederation.value;
    tournamenttypeModified.noTeams = this.noTeams.value;
    
    this.isEditing 
    ? this.tournamenttypeService.update(tournamenttypeModified)
      .subscribe(this.goToList) 
    : this.tournamenttypeService.add(tournamenttypeModified)
      .subscribe(this.goToList)
  }

  goToList = () => this.router.navigate(['tournamenttypes']);
}
