import bcrypt from 'bcrypt';
import { User, Prisma } from '@prisma/client';
import { UserRepository } from '../../repositories/user-repositories';
import { z } from 'zod';

class RegisterUserUseCase {
    constructor(private readonly prismaUserRepository: UserRepository) {}

    async execute({ name, email, password }: Prisma.UserCreateInput): Promise<User> {
        try {
            const existingUser = await this.prismaUserRepository.getUserByEmail(email);

            if (existingUser) {
                throw new Error('Usuário já existe');
            }

            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = await this.prismaUserRepository.register({
                name: name,
                email: email,
                password: hashPassword,
            });

            return {
                ...newUser,
            };
        } catch (error) {
            throw error;
        }
    }
}

export { RegisterUserUseCase };
