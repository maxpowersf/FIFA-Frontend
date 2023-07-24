import { Component, OnInit } from '@angular/core';
import { Confederation } from '../models/confederation.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfederationService } from '../services/confederation.service';

@Component({
  selector: 'app-confederation-list',
  templateUrl: './confederation-list.component.html',
  styleUrls: ['./confederation-list.component.css'],
})
export class ConfederationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'color', 'weight', 'actions'];

  confederations: Confederation[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private confederationService: ConfederationService,
  ) {}

  ngOnInit() {
    this.confederations = this.route.snapshot.data.confederations;
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  navigateToEdit = (id) =>
    this.router.navigate([id, 'edit'], { relativeTo: this.route });

  navigateToDetail = (id) =>
    this.router.navigate([id, 'view'], { relativeTo: this.route });

  onDelete = (id) =>
    this.confederationService.delete(id).subscribe(this.getAllConfederations);

  getAllConfederations = () =>
    this.confederationService
      .getAll()
      .subscribe((res) => (this.confederations = res));
}
