import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchRoundMapping } from 'src/app/shared/models/matchround';
import { Report, ReportsList } from '../../models/report.model';
import { StreaksCollectionResponse } from '../../models/streakscollectionresponse.model';

@Component({
  selector: 'app-report-streaks',
  templateUrl: './report-streaks.component.html',
  styleUrls: ['./report-streaks.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ReportStreaksComponent implements OnInit {

  report: Report;
  streaks: StreaksCollectionResponse[];
  matchrounds = MatchRoundMapping;

  displayedColumns: string[] = ['noPosition', 'team', 'confederation', 'streak'];
  displayedColumnsMatches: string[] = ['date', 'tournament', 'group', 'matchday', 'team1', 'goals1', 'divider', 'goals2', 'team2'];

  dataSource;

  stateTeamId;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    let reportTypeId = this.route.snapshot.params.type;
    this.report = ReportsList.find(x => x.id == reportTypeId);
    
    this.streaks = this.route.snapshot.data.streaks;

    this.stateTeamId = this.route.snapshot.queryParams.teamId;
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.streaks);
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route, state: { teamId: this.stateTeamId } })

}
