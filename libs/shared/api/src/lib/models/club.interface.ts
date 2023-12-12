import { IPlayer } from "./player.interface";

export interface IClub {
    _id: string;
    name: string;
    setupDate: Date;
    stadium: string;
    players: IPlayer[];
    
}