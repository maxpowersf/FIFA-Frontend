import { Groups } from './groups.model';
import { Tournament } from './tournament.model';

export class PositionsGroups {
  tournament: Tournament;
  groups: Groups[];

  constructor() {
    this.groups = [];
  }
}