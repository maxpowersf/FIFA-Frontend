import { Position } from './position.model';
import { TournamentType } from 'src/app/tournamenttype/tournamenttype.model';

export class Tournament {
    id: number;
    name: string;
    year: number;
    host: string;
    noOfTeams: number;
    tournamentTypeID: number;
    tournamentType: TournamentType;
    confederationID: number;
    positions: Position[];
}