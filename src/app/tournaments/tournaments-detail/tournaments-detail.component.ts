import { Component, OnInit, ViewChild } from '@angular/core';
import { Position } from '../models/position.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model';
import { PositionsGroups } from '../models/positionsGroups.model';
import { Groups } from '../models/groups.model';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';
import { Player } from 'src/app/players/models/player.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tournaments-detail',
  templateUrl: './tournaments-detail.component.html',
  styleUrls: ['./tournaments-detail.component.css']
})
export class TournamentsDetailComponent implements OnInit {

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'result', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst'];
  displayedColumnsGoalscorers: string[] = ['noPosition', 'fullName', 'positionName', 'team', 'goals'];

  dataSourceGoalscorers;

  @ViewChild('paginatorGoalscorers', null) paginatorGoalscorers: MatPaginator;

  tournament: Tournament;
  positions: Position[];
  positionGroups: PositionsGroups = new PositionsGroups();
  goalscorers: Player[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tournament = this.route.snapshot.data.tournament;
    this.positions = this.tournament.positions;
    this.goalscorers = this.route.snapshot.data.goalscorers;
  }

  ngOnInit() {
    if (this.tournament.tournamentType.format == TournamentFormat.Qualification) {
      this.processPositions();
    }

    this.dataSourceGoalscorers = new MatTableDataSource(this.goalscorers);
    this.dataSourceGoalscorers.paginator = this.paginatorGoalscorers;
  }

  processPositions = () => {
    var firstGroup = this.tournament.positions[0].group;
    this.positionGroups.groups.push(new Groups(firstGroup));
    var arrIndex = 0;

    this.tournament.positions.forEach(element => {
      if (element.group != firstGroup) {
        firstGroup = element.group;
        this.positionGroups.groups.push(new Groups(firstGroup));
        arrIndex++;
      }

      this.positionGroups.groups[arrIndex].positions.push(element);
    });
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
