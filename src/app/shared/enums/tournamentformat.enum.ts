export enum TournamentFormatEnum {
  Qualification = 1,
  ConfederationTournament = 2,
  ConfederationsCup = 3,
  WorldCup = 4,
}

export const TournamentFormatMapping = [
  { value: TournamentFormatEnum.Qualification, name: 'Qualification' },
  {
    value: TournamentFormatEnum.ConfederationTournament,
    name: 'Confederation Tournament',
  },
  { value: TournamentFormatEnum.ConfederationsCup, name: 'Confederations Cup' },
  { value: TournamentFormatEnum.WorldCup, name: 'World Cup' },
];
