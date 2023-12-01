import { User } from "./user.interface";

export enum TicketStatus {
    active = 'Active',
    inactive = 'Inactive',
    pending = 'Pending',
}


export interface ITicket {
    id: number;
    title: string,
    price: number;
    date: Date;
    status: TicketStatus;
    seat: number;
    owner?: User;
}