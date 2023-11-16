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
    id: number;
    firstName: string;
    lastName: string;
    emailAdress: string;
    dateOfBirth: Date;
    role: UserRole;
    gender : UserGender;
    image: string;
}