import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Match } from 'src/app/matches/models/match.model';

import { MatchRoundMapping } from '@shared/enums/matchround.enum';

@Component({
  selector: 'app-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class ResultsTabComponent implements OnInit {
  @Input() data: Match[];

  displayedColumns: string[] = [
    'date',
    'group',
    'matchday',
    'team1',
    'goals1',
    'divider',
    'goals2',
    'team2',
  ];
  dataSource;

  matchrounds = MatchRoundMapping;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }
}
