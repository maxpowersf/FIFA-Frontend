import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/teams/services/team.service';

@Component({
  selector: 'app-ranking-card',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.css'],
})
export class RankingCardComponent implements OnInit {
  quantity: number = 10;
  teams: any[];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadRankingsCard();
  }

  loadRankingsCard() {
    this.teamService.getFirstTeams(this.quantity).subscribe((res) => {
      this.teams = res;
    });
  }
}
