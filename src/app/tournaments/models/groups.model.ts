import { Position } from './position.model';

export class Groups {
    public groupName: string;
    positions: Position[];

    constructor(name: string) {
        this.groupName = name;
        this.positions = [];
    }
}