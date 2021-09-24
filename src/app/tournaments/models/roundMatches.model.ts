import { Match } from 'src/app/matches/models/match.model';

export class RoundMatches {
    public roundName: string;
    matches: Match[];

    constructor(name: string) {
        this.roundName = name;
        this.matches = [];
    }
}