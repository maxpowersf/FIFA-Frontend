import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Confederation } from 'src/app/confederations/models/confederation.models';
import { Team } from 'src/app/teams/models/team.model';
import { TeamService } from 'src/app/teams/services/team.service';

import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-rankings-list',
  templateUrl: './rankings-list.component.html',
  styleUrls: ['./rankings-list.component.css'],
})
export class RankingsListComponent implements OnInit {
  teams: Team[];
  confederations: Confederation[];

  displayedColumns: string[] = [
    'pos',
    'name',
    'confederation',
    'year1',
    'year2',
    'year3',
    'totalpoints',
    'rankingChange',
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
    private rankingService: RankingService,
    private teamService: TeamService,
  ) {}

  ngOnInit() {
    this.confederations = this.route.snapshot.data.confederations;
    this.teams = this.route.snapshot.data.teams;
    this.teams.sort(this.sortByPointsDesc);

    this.dataSource = new MatTableDataSource(this.teams);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.year1 = this.teams[0].ranking1.year;
    this.year2 = this.teams[0].ranking2.year;
    this.year3 = this.teams[0].ranking3.year;
  }

  filterByConfederation = (val) => {
    if (val !== 0) {
      const filteredTeams = this.teams.filter((x) => x.confederationID === val);
      this.dataSource.data = filteredTeams;
    } else {
      this.dataSource.data = this.teams;
    }
  };

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  updateRankings = () => {
    this.rankingService.update().subscribe(() => {
      this.getAllRankings();
    });
  };

  finishPeriod = () => {
    this.rankingService.finishPeriod().subscribe(() => {
      this.getAllRankings();
    });
  };

  getAllRankings = () => {
    this.teamService.getAll().subscribe((res) => {
      res.sort(this.sortByPointsDesc);
      this.teams = res;
      this.dataSource.data = this.teams;
    });
  };

  sortByPointsDesc = (f1: any, f2: any) => f2.totalPoints - f1.totalPoints;

  navigateToDetail = (id) =>
    this.router.navigate([id, 'dashboard'], { relativeTo: this.route });
}
