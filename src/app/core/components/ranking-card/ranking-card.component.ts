import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { TeamService } from 'src/app/teams/team.service';

@Component({
  selector: 'app-ranking-card',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.css']
})
export class RankingCardComponent implements OnInit {

  quantity: number = 8;
  teams: any[];

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.blockUI.start("0");
    this.loadRankingsCard();
  }

  loadRankingsCard() {
    this.teamService.getFirstTeams(this.quantity)
      .subscribe((res) => {
        this.teams = res;
        this.blockUI.stop();
      });
  }

}
