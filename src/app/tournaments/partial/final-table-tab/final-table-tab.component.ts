import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Position } from '../../models/position.model';
import { PositionsGroups } from '../../models/positionsGroups.model';

@Component({
  selector: 'app-final-table-tab',
  templateUrl: './final-table-tab.component.html',
  styleUrls: ['./final-table-tab.component.css'],
})
export class FinalTableTabComponent implements OnInit {
  @Input() data: Position[];
  @Input() altData: PositionsGroups;
  @Input() isQualification: boolean;

  displayedColumns: string[] = [
    'noPosition',
    'team',
    'confederationName',
    'result',
    'points',
    'gamesPlayed',
    'wins',
    'draws',
    'loses',
    'goalsFavor',
    'goalsAgainst',
  ];
  dataSource;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }
}
