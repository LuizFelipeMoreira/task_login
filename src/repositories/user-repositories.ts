import { User, Prisma } from '@prisma/client';

export interface UserRepository {
    register: (data: Prisma.UserCreateInput) => Promise<User>;
    getUserById: (id: number) => Promise<User | null>;
    getUserByEmail: (email: string) => Promise<User | null>;
}
