import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Player } from '../models/player.model';
import { Team } from 'src/app/teams/models/team.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { PlayerPositionMapping } from 'src/app/shared/models/playerposition';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.css'],
})
export class PlayersFormComponent implements OnInit {
  playerForm: UntypedFormGroup;

  isEditing: boolean = false;
  player: Player = new Player();

  positions;
  teams: Team[];

  get name() {
    return this.playerForm.get('name');
  }
  get position() {
    return this.playerForm.get('position');
  }
  get dorsal() {
    return this.playerForm.get('dorsal');
  }
  get team() {
    return this.playerForm.get('team');
  }
  get confederationsGoals() {
    return this.playerForm.get('confederationsGoals');
  }
  get worldCupGoals() {
    return this.playerForm.get('worldCupGoals');
  }
  get confederationsGoldenBoots() {
    return this.playerForm.get('confederationsGoldenBoots');
  }
  get worldCupGoldenBoots() {
    return this.playerForm.get('worldCupGoldenBoots');
  }

  constructor(
    private fb: UntypedFormBuilder,
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.playerForm = this.modelCreate();

    this.positions = PlayerPositionMapping;
    this.teams = this.route.snapshot.data.teams;

    this.isEditing = this.route.snapshot.url.toString().includes('edit');

    if (this.isEditing) {
      this.player = this.route.snapshot.data.player;
      this.name.patchValue(this.player.name);
      this.position.patchValue(this.player.position);
      this.dorsal.patchValue(this.player.dorsal);
      this.team.patchValue(this.player.teamID);
      this.confederationsGoals.patchValue(this.player.confederationsGoals);
      this.worldCupGoals.patchValue(this.player.worldCupGoals);
      this.confederationsGoldenBoots.patchValue(
        this.player.confederationsGoldenBoots,
      );
      this.worldCupGoldenBoots.patchValue(this.player.worldCupGoldenBoots);
    }
  }

  modelCreate = () =>
    this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      dorsal: [0, Validators.required],
      team: ['', Validators.required],
      confederationsGoals: [0],
      worldCupGoals: [0],
      confederationsGoldenBoots: [0],
      worldCupGoldenBoots: [0],
    });

  onSubmit = () => {
    if (!this.playerForm.valid) {
      return;
    }
    const playerModified = new Player();
    playerModified.id = this.player.id;
    playerModified.name = this.name.value;
    playerModified.position = this.position.value;
    playerModified.dorsal = this.dorsal.value;
    playerModified.teamID = this.team.value;
    playerModified.confederationsGoals = this.confederationsGoals.value;
    playerModified.worldCupGoals = this.worldCupGoals.value;
    playerModified.confederationsGoldenBoots =
      this.confederationsGoldenBoots.value;
    playerModified.worldCupGoldenBoots = this.worldCupGoldenBoots.value;

    this.isEditing
      ? this.playerService.update(playerModified).subscribe(this.goToList)
      : this.playerService.add(playerModified).subscribe(this.goToList);
  };

  goToList = () =>
    this.isEditing
      ? this.router.navigate(['../../'], { relativeTo: this.route })
      : this.router.navigate(['../'], { relativeTo: this.route });
}
