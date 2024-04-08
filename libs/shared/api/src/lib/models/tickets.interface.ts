import { IDivision } from "./division.interface";
import { User } from "./user.interface";

export enum TicketStatus {
    active = 'Active',
    inactive = 'Inactive',
    pending = 'Pending',
}


export interface ITicket {
    _id: string;
    title: string,
    price: number;
    date: Date;
    owner?: string;
    status: TicketStatus;
    seat: number;
    divisionId: string;
    clubs: string[];
}