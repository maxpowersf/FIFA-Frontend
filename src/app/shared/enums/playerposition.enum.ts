export enum PlayerPositionEnum {
  Goalkeeper = 1,
  Defender = 2,
  Midfielder = 3,
  Attacker = 4,
}

export const PlayerPositionMapping = [
  { value: PlayerPositionEnum.Goalkeeper, name: 'Goalkeeper' },
  { value: PlayerPositionEnum.Defender, name: 'Defender' },
  { value: PlayerPositionEnum.Midfielder, name: 'Midfielder' },
  { value: PlayerPositionEnum.Attacker, name: 'Attacker' },
];
