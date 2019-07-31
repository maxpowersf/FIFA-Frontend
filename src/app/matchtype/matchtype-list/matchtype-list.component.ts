import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchType } from '../matchtype.model';
import { MatchtypeService } from '../matchtype.service';

@Component({
  selector: 'app-matchtype-list',
  templateUrl: './matchtype-list.component.html',
  styleUrls: ['./matchtype-list.component.css']
})
export class MatchtypeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'weight', 'actions'];

  matchtypes: MatchType[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private matchtypeService: MatchtypeService
  ) { }

  ngOnInit() {
    debugger;
    this.matchtypes = this.route.snapshot.data.matchtypes;
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });
  navigateToEdit = (id) => this.router.navigate([id, 'edit'], { relativeTo: this.route });

  onDelete = (id) => this.matchtypeService.delete(id).subscribe(this.getAllMatchTypes);

  getAllMatchTypes = () => this.matchtypeService.getAll().subscribe((res) => this.matchtypes = res);
}
