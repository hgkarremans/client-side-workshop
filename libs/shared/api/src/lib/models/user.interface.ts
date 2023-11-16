export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    emailAdress: string;
    dateOfBirth: Date;
    role: UserRole;
    image: string;
}