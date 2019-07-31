import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: Team[];

  displayedColumns: string[] = ['id', 'name', 'confederationName', 'totalPoints', 'actualRank', 'highestRank', 'lowestRank', 'actions'];
  dataSource;

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;
    this.dataSource = new MatTableDataSource(this.teams);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });
  navigateToEdit = (id) => this.router.navigate([id, 'edit'], { relativeTo: this.route });

  onDelete = (id) => this.teamService.delete(id).subscribe(this.getAllTeams);

  getAllTeams = () => this.teamService.getAll().subscribe((res) => this.teams = res);
}
