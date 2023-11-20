
export enum TicketStatus {
    active = 'Active',
    inactive = 'Inactive',
    pending = 'Pending',
}


export interface Ticket {
    id: number;
    title: string,
    price: number;
    date: Date;
    status: TicketStatus;
    seat: number;
}