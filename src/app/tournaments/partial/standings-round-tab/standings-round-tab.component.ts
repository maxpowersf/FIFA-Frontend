import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Match } from 'src/app/matches/models/match.model';

@Component({
  selector: 'app-standings-round-tab',
  templateUrl: './standings-round-tab.component.html',
  styleUrls: ['./standings-round-tab.component.css']
})
export class StandingsRoundTabComponent implements OnInit {

  @Input() data: Match[];

  displayedColumns: string[] = ['date', 'team1', 'goals1', 'divider', 'goals2', 'team2'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

}
