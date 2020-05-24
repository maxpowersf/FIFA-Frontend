import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Team } from '../models/team.model';
import { Tournament } from 'src/app/tournaments/models/tournament.model';
import { debug } from 'util';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';

@Component({
  selector: 'app-teams-dashboard',
  templateUrl: './teams-dashboard.component.html',
  styleUrls: ['./teams-dashboard.component.css']
})
export class TeamsDashboardComponent implements OnInit {

  displayedColumnsWC: string[] = ['tournament', 'result', 'noPosition', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst', 'gamesPlayedQ', 'winsQ', 'drawsQ', 'losesQ', 'goalsFavorQ', 'goalsAgainstQ'];
  displayedColumns: string[] = ['tournament', 'result', 'noPosition', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst'];

  team: Team;
  tournaments: Tournament[];

  worldCups: Tournament[] = [];
  confederationsCups: Tournament[] = [];
  confederationTournaments: Tournament[] = [];

  hasConfederationTournament: boolean = false;
  confederationTournamentName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.team = this.route.snapshot.data.team;
    this.tournaments = this.route.snapshot.data.tournaments;

    const confTournaments: Tournament[] = this.tournaments
      .filter(a => a.tournamentType.format == TournamentFormat.ConfederationTournament);
    if (confTournaments.length > 0) {
      this.hasConfederationTournament = true;
      this.confederationTournamentName = confTournaments[0].tournamentType.name
    }
  }

  ngOnInit() {
    this.processPositions();
  }

  processPositions = () => {
    this.tournaments.forEach(element => {
      switch (element.tournamentType.format) {
        case TournamentFormat.WorldCup:
          const qualification: Tournament[] = this.tournaments
            .filter(a => a.tournamentType.format == TournamentFormat.Qualification &&
              a.year == element.year);
          if(qualification.length > 0) {
            element.qualifications = [];
            element.qualifications.push(qualification[0].positions[0]);
          }
          this.worldCups.push(element);
          break;
        case TournamentFormat.ConfederationsCup:
          this.confederationsCups.push(element);
          break;
        case TournamentFormat.ConfederationTournament:
          this.confederationTournaments.push(element);
          break;
      }
    });
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
