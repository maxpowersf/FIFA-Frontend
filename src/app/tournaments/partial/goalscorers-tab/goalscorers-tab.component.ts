import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Player } from 'src/app/players/models/player.model';

@Component({
  selector: 'app-goalscorers-tab',
  templateUrl: './goalscorers-tab.component.html',
  styleUrls: ['./goalscorers-tab.component.css'],
})
export class GoalscorersTabComponent implements OnInit {
  @Input() data: Player[];
  @ViewChild('paginator') paginator: MatPaginator;

  displayedColumns: string[] = [
    'noPosition',
    'fullName',
    'positionName',
    'team',
    'goals',
  ];
  dataSource;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }
}
