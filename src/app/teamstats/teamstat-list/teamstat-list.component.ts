import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
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

  teamStats: TeamStat[];
  teamStatsWorldCup: TeamStatWorldCup[];

  @ViewChild('Sort', null) public sort: MatSort;
  @ViewChild('SortWorldCup', null) public sortWorldCup: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.teamStats = this.route.snapshot.data.teamstats;
    this.teamStatsWorldCup = this.route.snapshot.data.teamstatsWorldCup;
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.teamStats);
    this.dataSource.sort = this.sort;

    this.dataSourceWorldCup = new MatTableDataSource(this.teamStatsWorldCup);
    this.dataSourceWorldCup.sort = this.sortWorldCup;
  }

}
