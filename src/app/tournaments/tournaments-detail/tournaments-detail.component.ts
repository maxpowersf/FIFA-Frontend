import { Component, OnInit } from '@angular/core';
import { Position } from '../models/position.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournaments-detail',
  templateUrl: './tournaments-detail.component.html',
  styleUrls: ['./tournaments-detail.component.css']
})
export class TournamentsDetailComponent implements OnInit {

  positions: Position[];

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst'];

  tournamentName: string = "Posiciones";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.positions = this.route.snapshot.data.positions;

    if(this.positions.length > 0){
      this.tournamentName = this.route.snapshot.data.positions[0].tournament.name;
    }
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
