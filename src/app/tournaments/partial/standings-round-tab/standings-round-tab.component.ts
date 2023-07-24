import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Match } from 'src/app/matches/models/match.model';

@Component({
  selector: 'app-standings-round-tab',
  templateUrl: './standings-round-tab.component.html',
  styleUrls: ['./standings-round-tab.component.css'],
})
export class StandingsRoundTabComponent implements OnInit {
  @Input() data: Match[];
  @Input() isPlayoff: boolean = false;
  @Input() isHomeAway: boolean = false;

  displayedColumns: string[] = [
    'date',
    'team1',
    'goals1',
    'divider',
    'goals2',
    'team2',
  ];
  dataSource;

  winnerTeam1: boolean = false;
  winnerTeam2: boolean = false;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);

    if (this.isHomeAway) {
      var match1 = this.data[0];
      var match2 = this.data[1];
      var team1Goals = match1.goalsTeam2 + match2.goalsTeam1;
      var team2Goals = match1.goalsTeam1 + match2.goalsTeam2;

      if (team1Goals > team2Goals) {
        this.winnerTeam1 = true;
      } else if (team2Goals > team1Goals) {
        this.winnerTeam2 = true;
      } else {
        if (match1.goalsTeam2 > match2.goalsTeam2) {
          this.winnerTeam1 = true;
        } else if (match2.goalsTeam2 > match1.goalsTeam1) {
          this.winnerTeam2 = true;
        } else {
          if (match2.penaltiesTeam1 > match2.penaltiesTeam2) {
            this.winnerTeam1 = true;
          } else {
            this.winnerTeam2 = true;
          }
        }
      }
    }
  }
}
