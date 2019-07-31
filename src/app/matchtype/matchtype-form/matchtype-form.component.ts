import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchtypeService } from '../matchtype.service';
import { MatchType } from '../matchtype.model';

@Component({
  selector: 'app-matchtype-form',
  templateUrl: './matchtype-form.component.html',
  styleUrls: ['./matchtype-form.component.css']
})
export class MatchtypeFormComponent implements OnInit {

  isEditing: boolean = false;
  matchtypeForm: FormGroup;

  matchtype: MatchType = new MatchType();

  get name() { return this.matchtypeForm.get('name'); }
  get weight() { return this.matchtypeForm.get('weight'); }

  constructor(
    private fb: FormBuilder,
    private matchtypeService: MatchtypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.matchtypeForm = this.modelCreate();

    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.matchtype = this.route.snapshot.data.matchtype;
      this.name.patchValue(this.matchtype.name);
      this.weight.patchValue(this.matchtype.weight);
    }
  }

  goToList = () => this.isEditing
    ? this.router.navigate(['../../'], { relativeTo: this.route })
    : this.router.navigate(['../'], { relativeTo: this.route })

    modelCreate = () => this.fb.group({
      name: ['', Validators.required],
      weight: ['0.0', Validators.required]
    })
  
  onSubmit = () => {
    debugger;
    if (!this.matchtypeForm.valid) { return; }
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
}
