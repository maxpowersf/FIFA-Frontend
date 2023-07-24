import { Match } from 'src/app/matches/models/match.model';
import { Position } from './position.model';
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

export class RoundMatches {
  public roundName: string;
  public isHomeAway: boolean;
  matches: Match[];

  constructor(name: string) {
    this.roundName = name;
    this.matches = [];
  }
}

export class Groups {
  public groupName: string;
  positions: Position[];

  constructor(name: string) {
    this.groupName = name;
    this.positions = [];
  }
}
