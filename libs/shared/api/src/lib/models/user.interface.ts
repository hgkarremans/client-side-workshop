import { Id } from "./id.type";

export enum UserRole {
    admin = 'Admin',
    editor = 'Editor',
    guest = 'Guest',
}
export enum UserGender {
    male = 'Male',
    female = 'Female',
    other = 'Other',
}


export interface User {
    Id: Id;
    firstName: string;
    lastName: string;
    emailAddress: string;
    passwordHash: string;
    dateOfBirth: Date;
    role: UserRole;
    gender : UserGender;
    image: string;
    hasTransportation: boolean;
    ticketsId: string[];
}