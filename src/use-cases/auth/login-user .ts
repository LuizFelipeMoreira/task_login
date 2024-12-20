import { Prisma, User } from '@prisma/client';
import { UserRepository } from '../../repositories/user-repositories';
import bcrypt from 'bcrypt';
import { UserNotExist } from '../../helpers/api-errors';

interface LoginRequest {
    email: string;
    password: string;
}

class LoginUserUseCase {
    constructor(private readonly prismaUserRepository: UserRepository) {}

    async execute({ email, password }: LoginRequest): Promise<User> {
        const user = await this.prismaUserRepository.getUserByEmail(email);

        if (!user) {
            throw new UserNotExist('Usuario nao encontrado');
        }

        const decodedPassword = await bcrypt.compare(password, user.password);

        if (!decodedPassword) {
            throw new Error('Senha invalida...');
        }

        return user;
    }
}

export { LoginUserUseCase };
