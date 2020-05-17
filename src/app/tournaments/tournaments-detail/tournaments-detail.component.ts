import { Component, OnInit } from '@angular/core';
import { Position } from '../models/position.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Tournament } from '../models/tournament.model';
import { PositionsGroups } from '../models/positionsGroups.model';
import { Groups } from '../models/groups.model';
import { TournamentFormat } from 'src/app/shared/models/tournamentformat';

@Component({
  selector: 'app-tournaments-detail',
  templateUrl: './tournaments-detail.component.html',
  styleUrls: ['./tournaments-detail.component.css']
})
export class TournamentsDetailComponent implements OnInit {

  tournament: Tournament;
  positions: Position[];
  positionGroups: PositionsGroups = new PositionsGroups();

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'result', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.tournament = this.route.snapshot.data.tournament;
    this.positions = this.tournament.positions;

    if(this.tournament.tournamentType.format == TournamentFormat.Qualification){
      var firstGroup = this.tournament.positions[0].group;
      this.positionGroups.groups.push(new Groups(firstGroup));
      var arrIndex = 0;

      this.tournament.positions.forEach(element => {
        if(element.group != firstGroup) {
          firstGroup = element.group;
          this.positionGroups.groups.push(new Groups(firstGroup));
          arrIndex++;
        }

        this.positionGroups.groups[arrIndex].positions.push(element);
      });
    }
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
