import { Match } from 'src/app/matches/models/match.model';

export class RoundMatches {
    public roundName: string;
    public isHomeAway: boolean;
    matches: Match[];

    constructor(name: string) {
        this.roundName = name;
        this.matches = [];
    }
}