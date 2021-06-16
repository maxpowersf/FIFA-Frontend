import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { Match } from "src/app/matches/models/match.model";
import { MatchRoundMapping } from "src/app/shared/models/matchround";
import { Report, ReportsList } from "../../models/report.model";

@Component({
  selector: "app-report-matches",
  templateUrl: "./report-matches.component.html",
  styleUrls: ["./report-matches.component.css"],
})
export class ReportMatchesComponent implements OnInit {
  report: Report;

  matches: Match[];

  matchrounds = MatchRoundMapping;

  displayedColumns: string[] = [
    "amount",
    "year",
    "date",
    "tournament",
    "group",
    "team1",
    "goalsTeam1",
    "divider",
    "goalsTeam2",
    "team2",
  ];

  dataSource;

  @ViewChild("paginator", null) paginator: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute) {
    let path = this.route.snapshot.routeConfig.path;
    this.report = ReportsList.find((x) => x.name.toLowerCase() == path);
    this.matches = this.route.snapshot.data.matches.map((match) => {
      return {
        ...match,
        amount:
          path == "margin"
            ? Math.abs(match.goalsTeam1 - match.goalsTeam2)
            : match.goalsTeam1 + match.goalsTeam2,
      };
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.matches);
    this.dataSource.paginator = this.paginator;
  }

  goToList = () => this.router.navigate(["../"], { relativeTo: this.route });
}
