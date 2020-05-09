export enum TournamentFormat {
    Qualification = 1,
    ConfederationTournament = 2,
    ConfederationsCup = 3,
    WorldCup = 4
}

export const TournamentFormatMapping = [
    { value: TournamentFormat.Qualification, name: 'Qualification' },
    { value: TournamentFormat.ConfederationTournament, name: 'Confederation Tournament' },
    { value: TournamentFormat.ConfederationsCup, name: 'Confederations Cup' },
    { value: TournamentFormat.WorldCup, name: 'World Cup' }
]