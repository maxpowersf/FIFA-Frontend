import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Confederation } from 'src/app/confederations/models/confederation.model';
import { TeamStat } from '../models/teamstat.model';
import { TeamStatWorldCup } from '../models/teamstatworldcup.model';

@Component({
  selector: 'app-teamstat-list',
  templateUrl: './teamstat-list.component.html',
  styleUrls: ['./teamstat-list.component.css']
})
export class TeamstatListComponent implements OnInit {

  displayedColumns: string[] = ['noPosition', 
                                'team', 
                                'confederationName', 
                                'points', 
                                'gamesPlayed', 
                                'wins', 
                                'draws', 
                                'loses', 
                                'goalsFavor', 
                                'goalsAgainst', 
                                'goalDifference', 
                                'effectiveness'];
  displayedColumnsWorldCup: string[] = ['noPosition', 
                                        'team', 
                                        'confederationName', 
                                        'points', 
                                        'gamesPlayed', 
                                        'wins', 
                                        'draws', 
                                        'loses', 
                                        'goalsFavor', 
                                        'goalsAgainst', 
                                        'goalDifference', 
                                        'effectiveness'];

  dataSource;
  dataSourceWorldCup;

  confederations: Confederation[];
  teamStats: TeamStat[];
  teamStatsWorldCup: TeamStatWorldCup[];

  @ViewChild('Sort', null) public sort: MatSort;
  @ViewChild('SortWorldCup', null) public sortWorldCup: MatSort;

  constructor(
    private route: ActivatedRoute
  ) {
    this.confederations = this.route.snapshot.data.confederations;
    this.teamStats = this.route.snapshot.data.teamstats;
    this.teamStatsWorldCup = this.route.snapshot.data.teamstatsWorldCup;
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.teamStats);
    this.dataSource.sort = this.sort;

    this.dataSourceWorldCup = new MatTableDataSource(this.teamStatsWorldCup);
    this.dataSourceWorldCup.sort = this.sortWorldCup;
  }

  filterByConfederation = (val) => {
    if (val != 0) {
      let filteredTeams = this.teamStats.filter(x => x.team.confederationID == val);
      let filteredTeamsWC = this.teamStatsWorldCup.filter(x => x.team.confederationID == val);
      this.dataSource.data = filteredTeams;
      this.dataSourceWorldCup.data = filteredTeamsWC;
    }
    else {
      this.dataSource.data = this.teamStats;
      this.dataSourceWorldCup.data = this.teamStatsWorldCup;
    }
  }

}
