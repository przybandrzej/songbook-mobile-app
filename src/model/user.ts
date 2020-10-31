import { UserRole } from './user-role';

export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    registrationDate: Date;
    activated: boolean;
    role?: UserRole;
}
