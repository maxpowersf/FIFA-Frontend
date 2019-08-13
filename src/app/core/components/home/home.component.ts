import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/teams/team.service';
import { Subject } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
