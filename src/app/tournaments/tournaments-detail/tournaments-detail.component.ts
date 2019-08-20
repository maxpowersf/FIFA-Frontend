import { Component, OnInit } from '@angular/core';
import { Position } from '../models/position.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model';

@Component({
  selector: 'app-tournaments-detail',
  templateUrl: './tournaments-detail.component.html',
  styleUrls: ['./tournaments-detail.component.css']
})
export class TournamentsDetailComponent implements OnInit {

  tournament: Tournament;
  positions: Position[];

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.tournament = this.route.snapshot.data.tournament;
    this.positions = this.tournament.positions;
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
