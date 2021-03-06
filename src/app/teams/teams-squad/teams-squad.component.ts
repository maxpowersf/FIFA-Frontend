import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from 'src/app/players/models/player.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams-squad',
  templateUrl: './teams-squad.component.html',
  styleUrls: ['./teams-squad.component.css']
})
export class TeamsSquadComponent implements OnInit {

  displayedColumns: string[] = ['dorsal', 'fullName', 'positionName', 'totalGoals', 'worldCupGoals', 'confederationsGoals', 'confederationTournamentGoals', 'qualificationGoals'];
  dataSource;

  players: Player[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.players = this.route.snapshot.data.players;
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.players);
    this.dataSource.sort = this.sort;
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
