import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/teams/models/team.model';
import { ReportsList } from '../models/report.model';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css'],
})
export class ReportsListComponent implements OnInit {
  reportsForm: UntypedFormGroup;

  get team() {
    return this.reportsForm.get('team');
  }
  get active() {
    return this.reportsForm.get('active');
  }

  reports = ReportsList;
  teams: Team[];
  teamId: number;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;

    this.reportsForm = this.modelCreate();

    if (window.history.state.teamId != undefined) {
      this.teamId = parseInt(window.history.state.teamId);
      this.team.patchValue(this.teamId);
    }

    if (window.history.state.active != undefined) {
      this.active.patchValue(window.history.state.active);
    }
  }

  modelCreate = () =>
    this.fb.group({
      team: [this.teamId],
      active: [false],
    });

  setSelectedTeam = (val) => {
    this.teamId = val;
  };

  goToReportPage = (val) => {
    let report = ReportsList.find((x) => x.name.toLowerCase() == val);

    let redirectUrl = report.url;
    let queryParams;
    if (report.id != undefined) {
      redirectUrl = 'streaks/' + report.id;

      if (this.team.value > 0 || this.active.value) {
        queryParams = { teamId: this.team.value, active: this.active.value };
      }
    }

    this.router.navigate([redirectUrl], {
      relativeTo: this.route,
      queryParams: queryParams,
    });
  };
}
