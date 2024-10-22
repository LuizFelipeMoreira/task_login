import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { UserRepository } from '../user-repositories';

class PrismaUserRepository implements UserRepository {
    async register(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }

    async getUserByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        return user;
    }

    async getUserById(id: number) {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        return user;
    }
}

export default new PrismaUserRepository();
