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

  team: Team;
  tournaments: Tournament[];

  confederationTournamentName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.team = this.route.snapshot.data.team;
    this.tournaments = this.route.snapshot.data.tournaments;
    this.confederationTournamentName = this.tournaments
      .filter(a => a.tournamentType.format == TournamentFormat.ConfederationTournament)[0]
      .tournamentType.name;
  }

  ngOnInit() {

  }

  processPositions = () => {

  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
