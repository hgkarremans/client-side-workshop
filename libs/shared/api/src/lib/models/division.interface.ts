import { IClub } from "./club.interface";
import { ITicket } from "./tickets.interface";

export interface IDivision {
    _id: string;
    name: string;
    ranking: string;
    teams: IClub[];
    tickets: ITicket[];
}