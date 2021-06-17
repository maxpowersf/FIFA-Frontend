import { Component, OnInit, ViewChild } from "@angular/core";
import { Team } from "../models/team.model";
import { TeamService } from "../services/team.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-teams-list",
  templateUrl: "./teams-list.component.html",
  styleUrls: ["./teams-list.component.css"],
})
export class TeamsListComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "confederationName",
    "totalPoints",
    "actualRank",
    "rankingChange",
    "highestRank",
    "lowestRank",
    "actions",
  ];

  dataSource;

  teams: Team[];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {
    this.teams = this.route.snapshot.data.teams;
    this.teams.sort((a, b) => {
      let aName = a.name.toLowerCase();
      let bName = b.name.toLowerCase();
      return aName < bName ? -1 : aName < bName ? 1 : 0;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.teams);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addAction = () => this.router.navigate(["new"], { relativeTo: this.route });

  navigateToDetail = (id) =>
    this.router.navigate([id, "dashboard"], { relativeTo: this.route });

  navigateToEdit = (id) =>
    this.router.navigate([id, "edit"], { relativeTo: this.route });

  navigateToSquad = (id) =>
    this.router.navigate([id, "squad"], { relativeTo: this.route });

  onDelete = (id) => this.teamService.delete(id).subscribe(this.getAllTeams);

  getAllTeams = () =>
    this.teamService.getAll().subscribe((res) => (this.teams = res));
}
