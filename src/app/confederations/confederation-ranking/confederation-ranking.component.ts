import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/teams/models/team.model';

@Component({
  selector: 'app-confederation-ranking',
  templateUrl: './confederation-ranking.component.html',
  styleUrls: ['./confederation-ranking.component.css'],
})
export class ConfederationRankingComponent implements OnInit {
  teams: Team[];

  displayedColumns: string[] = [
    'pos',
    'name',
    'confederation',
    'year1',
    'year2',
    'year3',
    'totalpoints',
  ];
  dataSource;

  year1: number;
  year2: number;
  year3: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;
    this.teams.sort(this.sortByPointsDesc);

    this.dataSource = new MatTableDataSource(this.teams);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.year1 = this.teams[0].ranking1.year;
    this.year2 = this.teams[0].ranking2.year;
    this.year3 = this.teams[0].ranking3.year;
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route });

  sortByPointsDesc = (f1: any, f2: any) => f2.totalPoints - f1.totalPoints;
}
