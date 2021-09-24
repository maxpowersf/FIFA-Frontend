import { Groups } from './groups.model';
import { RoundMatches } from './roundMatches.model';
import { Tournament } from './tournament.model';

export class PositionsGroups {
  tournament: Tournament;
  playoffs: RoundMatches[];
  groups: Groups[];
  rounds: RoundMatches[];

  constructor() {
    this.playoffs = [];
    this.groups = [];
    this.rounds = [];
  }
}