import { Component, OnInit } from '@angular/core';
import { ReportsList } from '../models/report.model';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {

  reports = ReportsList;

  constructor() { }

  ngOnInit() {
  }

}
