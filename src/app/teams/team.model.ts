import { Ranking } from '../rankings/ranking.model';

export class Team {
    id: number;
    name: string;
    flag: string;
    confederationID: number;
    confederationName: string;
    confederationColor: string;
    confederationWeight: number;
    actualRank: number;
    lowestRank: number;
    highestRank: number;
    totalPoints: number;
    rankings: Ranking[];
    ranking1: Ranking;
    ranking2: Ranking;
    ranking3: Ranking;
    titles: number;
    worldCupTitles: number;
    confederationCupTitles: number;
    confederationTournamentTitles: number;
}