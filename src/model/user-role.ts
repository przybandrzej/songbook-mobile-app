
export interface UserRole {
    id: number;
    name: string;
}

export enum Role {
    User = 'user',
    Moderator = 'moderator',
    Admin = 'admin',
    Superuser = 'superuser'
}
