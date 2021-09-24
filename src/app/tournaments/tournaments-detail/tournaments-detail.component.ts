import { Component, OnInit, ViewChild } from '@angular/core';
import { Position } from '../models/position.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model';
import { PositionsGroups } from '../models/positionsGroups.model';
import { Groups } from '../models/groups.model';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';
import { Player } from 'src/app/players/models/player.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Match } from 'src/app/matches/models/match.model';
import { MatchRoundMapping } from 'src/app/shared/models/matchround';

@Component({
  selector: 'app-tournaments-detail',
  templateUrl: './tournaments-detail.component.html',
  styleUrls: ['./tournaments-detail.component.css']
})
export class TournamentsDetailComponent implements OnInit {

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'result', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst'];
  displayedColumnsStandings: string[] = ['noPosition', 'team', 'confederationName', 'points', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst', 'goalDifference'];
  displayedColumnsRounds: string[] = ['date', 'team1', 'goals1', 'divider', 'goals2', 'team2'];
  displayedColumnsMatches: string[] = ['date', 'group', 'matchday', 'team1', 'goals1', 'divider', 'goals2', 'team2'];
  displayedColumnsGoalscorers: string[] = ['noPosition', 'fullName', 'positionName', 'team', 'goals'];

  dataSourceGoalscorers;
  dataSourceMatches;

  @ViewChild('paginatorGoalscorers', null) paginatorGoalscorers: MatPaginator;

  tournament: Tournament;
  standings: PositionsGroups;
  positions: Position[];
  positionGroups: PositionsGroups = new PositionsGroups();
  matches: Match[];
  goalscorers: Player[];

  matchrounds = MatchRoundMapping;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tournament = this.route.snapshot.data.tournament;
    this.standings = this.route.snapshot.data.standings;
    this.positions = this.tournament.positions;
    this.matches = this.route.snapshot.data.matches;
    this.goalscorers = this.route.snapshot.data.goalscorers;
  }

  ngOnInit() {
    if (this.tournament.tournamentType.format == TournamentFormat.Qualification &&
        this.tournament.positions.length > 0) {
      this.processPositions();
    }

    this.dataSourceMatches = new MatTableDataSource(this.matches);

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
