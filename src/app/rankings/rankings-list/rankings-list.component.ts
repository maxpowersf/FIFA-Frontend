import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/teams/models/team.model';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router, ActivatedRoute } from '@angular/router';
import { RankingService } from '../services/ranking.service';
import { TeamService } from 'src/app/teams/services/team.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Confederation } from 'src/app/confederations/models/confederation.model';

@Component({
  selector: 'app-rankings-list',
  templateUrl: './rankings-list.component.html',
  styleUrls: ['./rankings-list.component.css']
})
export class RankingsListComponent implements OnInit {

  teams: Team[];
  confederations: Confederation[];

  displayedColumns: string[] = ['pos', 'name', 'confederation', 'year1', 'year2', 'year3', 'totalpoints', 'rankingChange'];
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
    private rankingService: RankingService,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.blockUI.start("0");
    this.confederations = this.route.snapshot.data.confederations;
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

  filterByConfederation = (val) => {
    if (val != 0) {
      let filteredTeams = this.teams.filter(x => x.confederationID == val);
      this.dataSource.data = filteredTeams;
    }
    else {
      this.dataSource.data = this.teams;
    }
  }

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  updateRankings = () => {
    this.blockUI.start("3");
    this.rankingService.update().subscribe(() => {
      this.getAllRankings();
    });
  }

  finishPeriod = () => {
    this.blockUI.start("4");
    this.rankingService.finishPeriod().subscribe(() => {
      this.getAllRankings();
    });
  }

  getAllRankings = () => {
    this.teamService.getAll().subscribe((res) => {
      res.sort(this.sortByPointsDesc);
      this.teams = res;
      this.dataSource.data = this.teams;
      this.blockUI.stop();
    });
  }

  sortByPointsDesc = (f1: any, f2: any) => f2.totalPoints - f1.totalPoints;

  navigateToDetail = (id) => this.router.navigate([id, 'dashboard'], { relativeTo: this.route });
}
