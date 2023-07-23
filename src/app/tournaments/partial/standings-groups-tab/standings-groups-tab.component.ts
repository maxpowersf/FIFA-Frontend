import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Position } from '../../models/position.model';

@Component({
  selector: 'app-standings-groups-tab',
  templateUrl: './standings-groups-tab.component.html',
  styleUrls: ['./standings-groups-tab.component.css']
})
export class StandingsGroupsTabComponent implements OnInit {

  @Input() data: Position[];

  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'points', 'gamesPlayed', 'wins', 'draws', 'loses', 'goalsFavor', 'goalsAgainst', 'goalDifference'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

}
