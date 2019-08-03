import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormLayout } from 'src/app/shared/models/form-layout.model';
import { TournamentType } from '../tournamenttype.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamenttypeService } from '../tournamenttype.service';

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

  get name() { return this.tournamenttypeForm.get('name') };

  constructor(
    private fb: FormBuilder,
    private tournamenttypeService: TournamenttypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tournamenttypeForm = this.modelCreate();
    
    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.formInfo = {
        submitText: 'Actualizar',
        title: 'Tipo de Torneo',
        subtitle: 'Editar tipo de torneo',
        isEditing: true
      }
      this.tournamenttype = this.route.snapshot.data.tournamenttype;
      this.name.patchValue(this.tournamenttype.name);
      
    }
    else {
      this.formInfo = {
        submitText: 'Guardar',
        title: 'Tipo de Torneo',
        subtitle: 'Crear nuevo tipo de torneo',
        isEditing: false
      }
    }
  }

  modelCreate = () => this.fb.group({
    name: ['', Validators.required]
  });

  onSubmit = () => {
    if (!this.tournamenttypeForm.valid) return;
    const tournamenttypeModified = new TournamentType();
    tournamenttypeModified.id = this.tournamenttype.id;
    tournamenttypeModified.name = this.name.value;
    
    this.isEditing 
    ? this.tournamenttypeService.update(tournamenttypeModified)
      .subscribe(this.goToList) 
    : this.tournamenttypeService.add(tournamenttypeModified)
      .subscribe(this.goToList)
  }

  goToList = () => this.router.navigate(['tournamenttypes']);
}
