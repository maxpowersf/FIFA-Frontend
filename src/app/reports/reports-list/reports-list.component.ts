import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/teams/models/team.model';
import { ReportsList } from '../models/report.model';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {

  reportsForm: FormGroup;

  get team() { return this.reportsForm.get('team'); }

  reports = ReportsList;
  teams: Team[];
  teamId: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data.teams;

    this.reportsForm = this.modelCreate();

    if (window.history.state.teamId != undefined) {
      this.teamId = parseInt(window.history.state.teamId);
      this.team.patchValue(this.teamId);
    }
  }

  modelCreate = () => this.fb.group({
    team: [this.teamId]
  })

  setSelectedTeam = (val) => {
    this.teamId = val;
  }

  goToReportPage = (val) => {
    let report = ReportsList.find(x => x.name.toLowerCase() == val);

    let redirectUrl = report.url;
    let queryParams;
    if (report.id != undefined) {
      redirectUrl = 'streaks/' + report.id;

      if (this.team.value > 0) {
        queryParams = { teamId: this.team.value }
      }
    }

    this.router.navigate([redirectUrl], { relativeTo: this.route, queryParams: queryParams })
  }

}
