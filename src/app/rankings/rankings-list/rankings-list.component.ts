import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/teams/team.model';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { RankingService } from '../ranking.service';
import { TeamService } from 'src/app/teams/team.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-rankings-list',
  templateUrl: './rankings-list.component.html',
  styleUrls: ['./rankings-list.component.css']
})
export class RankingsListComponent implements OnInit {

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
    private rankingService: RankingService,
    private teamService: TeamService
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

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  updateRankings = () => {
    this.blockUI.start("3");
    this.rankingService.update().subscribe(this.getAllRankings);
  }

  getAllRankings = () => {
    this.teamService.getAll().subscribe((res) => {
      this.teams = res;
      this.teams.sort(this.sortByPointsDesc);
      this.blockUI.stop();
    });
  }

  sortByPointsDesc = (f1: any, f2: any) => f2.totalPoints - f1.totalPoints;
}
