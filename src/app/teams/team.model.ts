import { Ranking } from '../rankings/ranking.model';

export class Team {
    id: number;
    name: string;
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
}