import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/teams/team.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentType } from '../tournamenttype.model';
import { TeamService } from 'src/app/teams/team.service';

@Component({
  selector: 'app-tournamenttype-detail',
  templateUrl: './tournamenttype-detail.component.html',
  styleUrls: ['./tournamenttype-detail.component.css']
})
export class TournamenttypeDetailComponent implements OnInit {

  tournamentType: TournamentType;
  tournamentTypeFormat: number;
  teams: Team[];
  
  displayedColumns: string[] = ['noPosition', 'team', 'confederationName', 'titles'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.tournamentType = this.route.snapshot.data.tournamenttype;
    this.tournamentTypeFormat = this.tournamentType.format;

    this.getTeams(this.tournamentType.confederationID);
  }

  getTeams(confederationId) {
    this.teamService.getTeamsWithTitles(confederationId, this.tournamentType.id)
    .subscribe((res) => {
      this.teams = res.map(c => this.mapFromApi(c));
    });
  }

  mapFromApi(element: any){
    var titles = 0;
    switch(this.tournamentTypeFormat){
      case 2:
        titles = element.confederationTournamentTitles;
        break;
      case 3:
        titles = element.confederationsCupTitles;
        break;
      case 4: 
        titles = element.worldCupTitles;
        break;
    }
    return {...element, titles: titles};
  }

  goToList = () => this.router.navigate(['../../'], { relativeTo: this.route })

}
