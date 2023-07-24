import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '../models/player.model';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'],
})
export class PlayersListComponent implements OnInit {
  displayedColumns: string[] = [
    'dorsal',
    'name',
    'fullname',
    'positionName',
    'team',
    'totalGoals',
    'worldCupGoals',
    'confederationsGoals',
    'confederationTournamentGoals',
    'qualificationGoals',
    'actions',
  ];
  dataSource;

  players: Player[];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
  ) {
    this.players = this.route.snapshot.data.players;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.players);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };

  addAction = () => this.router.navigate(['new'], { relativeTo: this.route });

  navigateToEdit = (id) =>
    this.router.navigate([id, 'edit'], { relativeTo: this.route });

  navigateToDetail = (id) =>
    this.router.navigate([id, 'edit'], { relativeTo: this.route });

  onDelete = (id: number) => {
    this.playerService
      .delete(id)
      .pipe(switchMap(this.updateDataTable))
      .subscribe((res) => {
        this.players = res;
        this.dataSource.data = this.players;
      });
  };

  updateDataTable = () => this.playerService.getAll();
}
