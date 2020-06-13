import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/teams/services/team.service';

@Component({
  selector: 'app-champions-card',
  templateUrl: './champions-card.component.html',
  styleUrls: ['./champions-card.component.css']
})
export class ChampionsCardComponent implements OnInit {

  quantity: number = 10;
  teams: any[];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.loadChampionsCard();
  }

  loadChampionsCard() {
    this.teamService.getTeamsChampionsCard(this.quantity)
      .subscribe((res) => {
        this.teams = res;
      });
  }

}
