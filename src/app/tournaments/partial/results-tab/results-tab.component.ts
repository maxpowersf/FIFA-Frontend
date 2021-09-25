import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Match } from 'src/app/matches/models/match.model';
import { MatchRoundMapping } from 'src/app/shared/models/matchround';

@Component({
  selector: 'app-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css']
})
export class ResultsTabComponent implements OnInit {

  @Input() data: Match[];

  displayedColumns: string[] = ['date', 'group', 'matchday', 'team1', 'goals1', 'divider', 'goals2', 'team2'];
  dataSource;

  matchrounds = MatchRoundMapping;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

}
