import { Position } from './position.model';

export class Tournament {
    id: number;
    name: string;
    year: number;
    host: string;
    noOfTeams: number;
    tournamentTypeID: number;
    confederationID: number;
    positions: Position[];
}