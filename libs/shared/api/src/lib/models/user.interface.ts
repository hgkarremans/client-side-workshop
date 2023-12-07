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
    emailAdress: string;
    passwordHash: string;
    dateOfBirth: Date;
    role: UserRole;
    gender : UserGender;
    image: string;
    friends: User[];
    hasTransportation: boolean;
    ticketsId: string[];
}