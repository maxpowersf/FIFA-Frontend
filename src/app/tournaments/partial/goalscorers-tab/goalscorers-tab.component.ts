import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Player } from 'src/app/players/models/player.model';

@Component({
  selector: 'app-goalscorers-tab',
  templateUrl: './goalscorers-tab.component.html',
  styleUrls: ['./goalscorers-tab.component.css']
})
export class GoalscorersTabComponent implements OnInit {

  @Input() data: Player[];
  @ViewChild('paginator', null) paginator: MatPaginator;

  displayedColumns: string[] = ['noPosition', 'fullName', 'positionName', 'team', 'goals'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

}
