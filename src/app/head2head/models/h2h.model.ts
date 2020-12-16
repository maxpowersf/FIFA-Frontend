import { Team } from "src/app/teams/models/team.model";

export class H2H {
    team1: Team;
    team2: Team;
    gamesPlayed: number;
    wins: number;
    draws: number;
    loses: number;
    goalsFavor: number;
    goalsAgainst: number;
}