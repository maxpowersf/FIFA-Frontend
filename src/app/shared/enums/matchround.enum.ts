export enum MatchRoundEnum {
  Playoff = 1,
  Group = 2,
  Round16 = 3,
  Quarterfinal = 4,
  Semifinal = 5,
  ThirdPlace = 6,
  Final = 7,
}

export const MatchRoundMapping = [
  { value: MatchRoundEnum.Playoff, name: 'Playoff' },
  { value: MatchRoundEnum.Group, name: 'Group' },
  { value: MatchRoundEnum.Round16, name: 'Round of 16' },
  { value: MatchRoundEnum.Quarterfinal, name: 'Quarterfinal' },
  { value: MatchRoundEnum.Semifinal, name: 'Semifinal' },
  { value: MatchRoundEnum.ThirdPlace, name: 'Third Place' },
  { value: MatchRoundEnum.Final, name: 'Final' },
];
