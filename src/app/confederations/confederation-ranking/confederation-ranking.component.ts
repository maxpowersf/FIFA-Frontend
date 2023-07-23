import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/teams/models/team.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confederation-ranking',
  templateUrl: './confederation-ranking.component.html',
  styleUrls: ['./confederation-ranking.component.css']
})
export class ConfederationRankingComponent implements OnInit {

  teams: Team[];

  displayedColumns: string[] = ['pos', 'name', 'confederation', 'year1', 'year2', 'year3', 'totalpoints'];
  dataSource;

  year1: number;
  year2: number;
  year3: number;

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild(MatSort, null) sort: MatSort;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.blockUI.start("0");
    this.teams = this.route.snapshot.data.teams;
    this.teams.sort(this.sortByPointsDesc);
    
    this.dataSource = new MatTableDataSource(this.teams);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.year1 = this.teams[0].ranking1.year;
    this.year2 = this.teams[0].ranking2.year;
    this.year3 = this.teams[0].ranking3.year;
    this.blockUI.stop();
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

  sortByPointsDesc = (f1: any, f2: any) => f2.totalPoints - f1.totalPoints;
}
