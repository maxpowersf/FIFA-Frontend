import { Match } from "src/app/matches/models/match.model";
import { Team } from "src/app/teams/models/team.model";

export class StreaksCollectionResponse {
    team: Team;
    teamName: string;
    confederationName: string;
    streak: number;
    isCurrent: boolean;
    matches: Match[];
}