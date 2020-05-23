export enum PlayerPosition {
    Goalkeeper = 1,
    Defender = 2,
    Midfielder = 3,
    Attacker = 4
}

export const PlayerPositionMapping = [
    { value: PlayerPosition.Goalkeeper, name: 'Goalkeeper' },
    { value: PlayerPosition.Defender, name: 'Defender' },
    { value: PlayerPosition.Midfielder, name: 'Midfielder' },
    { value: PlayerPosition.Attacker, name: 'Attacker' }
]