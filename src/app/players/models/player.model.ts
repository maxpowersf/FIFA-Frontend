import { Team } from 'src/app/teams/models/team.model';

export class Player {
  id: number;
  name: string;
  fullName: string;
  position: number;
  dorsal: number;
  teamID: number;
  team: Team;
  qualificationGoals: number;
  confederationTournamentGoals: number;
  confederationsGoals: number;
  worldCupGoals: number;
  confederationsGoldenBoots: number;
  worldCupGoldenBoots: number;
}
