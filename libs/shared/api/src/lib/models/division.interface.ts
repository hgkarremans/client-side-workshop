import { IClub } from "./club.interface";

export interface IDivision {
    _id: string;
    name: string;
    ranking: string;
    teams: IClub[];
}