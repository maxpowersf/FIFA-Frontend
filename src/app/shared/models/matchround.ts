export enum MatchRound {
  Playoff = 1,
  Group = 2,
  Round16 = 3,
  Quarterfinal = 4,
  Semifinal = 5,
  ThirdPlace = 6,
  Final = 7
}

export const MatchRoundMapping = [
  { value: MatchRound.Playoff, name: 'Playoff' },
  { value: MatchRound.Group, name: 'Group' },
  { value: MatchRound.Round16, name: 'Round of 16' },
  { value: MatchRound.Quarterfinal, name: 'Quarterfinal' },
  { value: MatchRound.Semifinal, name: 'Semifinal' },
  { value: MatchRound.ThirdPlace, name: 'Third Place' },
  { value: MatchRound.Final, name: 'Final' }
]