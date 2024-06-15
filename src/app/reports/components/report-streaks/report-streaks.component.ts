import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ActivatedRoute, Router } from '@angular/router';

import { MatchRoundMapping } from '@shared/enums/matchround.enum';
import { Report, ReportsList } from '../../models/report.model';
import { StreaksCollectionResponse } from '../../models/streakscollectionresponse.model';

@Component({
  selector: 'app-report-streaks',
  templateUrl: './report-streaks.component.html',
  styleUrls: ['./report-streaks.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
})
export class ReportStreaksComponent implements OnInit {
  report: Report;
  streaks: StreaksCollectionResponse[];
  matchrounds = MatchRoundMapping;

  displayedColumns: string[] = [
    'noPosition',
    'team',
    'confederation',
    'startDate',
    'endDate',
    'streak',
  ];
  displayedColumnsMatches: string[] = [
    'date',
    'tournament',
    'group',
    'matchday',
    'team1',
    'goals1',
    'divider',
    'goals2',
    'team2',
  ];

  dataSource;

  stateTeamId;
  stateActive;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const reportTypeId = this.route.snapshot.params.type;
    this.report = ReportsList.find((x) => x.id == reportTypeId);

    this.streaks = this.route.snapshot.data.streaks;

    this.stateTeamId = this.route.snapshot.queryParams.teamId;
    this.stateActive = this.route.snapshot.queryParams.active;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.streaks);
  }

  goToList = () =>
    this.router.navigate(['../../'], {
      relativeTo: this.route,
      state: { teamId: this.stateTeamId, active: this.stateActive },
    });
}
