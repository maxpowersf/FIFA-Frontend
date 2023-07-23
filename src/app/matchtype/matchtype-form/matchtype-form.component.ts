import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchtypeService } from '../services/matchtype.service';
import { MatchType } from '../models/matchtype.model';
import { FormLayout } from 'src/app/shared/models/form-layout.model';

@Component({
  selector: 'app-matchtype-form',
  templateUrl: './matchtype-form.component.html',
  styleUrls: ['./matchtype-form.component.css']
})
export class MatchtypeFormComponent implements OnInit {
  matchtypeForm: UntypedFormGroup;
  formInfo: FormLayout;

  isEditing: boolean;
  matchtype: MatchType = new MatchType();

  get name() { return this.matchtypeForm.get('name'); }
  get weight() { return this.matchtypeForm.get('weight'); }

  constructor(
    private fb: UntypedFormBuilder,
    private matchtypeService: MatchtypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.matchtypeForm = this.modelCreate();

    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.formInfo = {
        submitText: 'Update',
        title: 'Match Type',
        subtitle: 'Edit match type',
        isEditing: true
      }
      this.matchtype = this.route.snapshot.data.matchtype;
      this.name.patchValue(this.matchtype.name);
      this.weight.patchValue(this.matchtype.weight);

    }
    else {
      this.formInfo = {
        submitText: 'Save',
        title: 'Match Type',
        subtitle: 'Create match type',
        isEditing: false
      }
    }
  }

  modelCreate = () => this.fb.group({
    name: ['', Validators.required],
    weight: ['0.0', Validators.required]
  })

  onSubmit = () => {
    if (!this.matchtypeForm.valid) return;
    const matchtypeModified = new MatchType();
    matchtypeModified.id = this.matchtype.id;
    matchtypeModified.weight = this.weight.value;
    matchtypeModified.name = this.name.value;

    this.isEditing
      ? this.matchtypeService.update(matchtypeModified)
        .subscribe(this.goToList)
      : this.matchtypeService.add(matchtypeModified)
        .subscribe(this.goToList);
  }

  goToList = () => this.router.navigate(['matchtypes']);
}
