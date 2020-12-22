import { Team } from "src/app/teams/models/team.model";

export class TeamStatWorldCup {
    id: number;
    teamId: number;
    team: Team;
    points: number;
    gamesPlayed: number;
    wins: number;
    draws: number;
    loses: number;
    goalsFavor: number;
    goalsAgainst: number;
    goalDifference: number;
    effectiveness: number;
}