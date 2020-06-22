import { Component, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/teams/models/team.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentType } from '../models/tournamenttype.model';
import { TeamService } from 'src/app/teams/services/team.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tournamenttype-detail',
  templateUrl: './tournamenttype-detail.component.html',
  styleUrls: ['./tournamenttype-detail.component.css']
})
export class TournamenttypeDetailComponent implements OnInit {

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'titles'];
  dataSource;

  tournamentType: TournamentType;
  tournamentTypeFormat: number;
  teams: Team[];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {
    this.tournamentType = this.route.snapshot.data.tournamenttype;
    this.tournamentTypeFormat = this.tournamentType.format;
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeamsWithTitles(this.tournamentType.id)
      .subscribe((res) => {
        this.teams = res.map(c => this.mapFromApi(c));

        this.dataSource = new MatTableDataSource(this.teams);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  mapFromApi(element: any) {
    var titles = 0;
    switch (this.tournamentTypeFormat) {
      case 1:
        titles = element.worldCupQualifications;
        break;
      case 2:
        titles = element.confederationTournamentTitles;
        break;
      case 3:
        titles = element.confederationsCupTitles;
        break;
      case 4:
        titles = element.worldCupTitles;
        break;
    }
    return { ...element, titles: titles };
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
