import { Position } from './position.model';
import { TournamentType } from 'src/app/tournamenttype/models/tournamenttype.model';

export class Tournament {
    id: number;
    name: string;
    year: number;
    host: string;
    hostFlag: string;
    noOfTeams: number;
    tournamentTypeID: number;
    tournamentType: TournamentType;
    confederationID: number;
    finalPositions: boolean;
    positions: Position[];
    qualifications: Position[];
}