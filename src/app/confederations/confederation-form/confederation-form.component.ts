import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Confederation } from '../models';
import { ConfederationService } from '../services';

@Component({
  selector: 'app-confederation-form',
  templateUrl: './confederation-form.component.html',
  styleUrls: ['./confederation-form.component.css'],
})
export class ConfederationFormComponent implements OnInit {
  isEditing: boolean = false;
  confederationForm: UntypedFormGroup;

  confederation: Confederation = new Confederation();

  get name() {
    return this.confederationForm.get('name');
  }
  get color() {
    return this.confederationForm.get('color');
  }
  get weight() {
    return this.confederationForm.get('weight');
  }

  constructor(
    private fb: UntypedFormBuilder,
    private confederationService: ConfederationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.confederationForm = this.modelCreate();

    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.confederation = this.route.snapshot.data.confederation;
      this.name.patchValue(this.confederation.name);
      this.color.patchValue(this.confederation.color);
      this.weight.patchValue(this.confederation.weight);
    }
  }

  goToList = () =>
    this.isEditing
      ? this.router.navigate(['../../'], { relativeTo: this.route })
      : this.router.navigate(['../'], { relativeTo: this.route });

  modelCreate = () =>
    this.fb.group({
      name: ['', Validators.required],
      color: ['#FFFFFF', Validators.required],
      weight: ['0.0', Validators.required],
    });

  onSubmit = () => {
    if (!this.confederationForm.valid) {
      return;
    }
    const confederationModified = new Confederation();
    confederationModified.id = this.confederation.id;
    confederationModified.name = this.name.value;
    confederationModified.color = this.color.value;
    confederationModified.weight = this.weight.value;

    this.isEditing
      ? this.confederationService
          .update(confederationModified)
          .subscribe(this.goToList)
      : this.confederationService
          .add(confederationModified)
          .subscribe(this.goToList);
  };
}
