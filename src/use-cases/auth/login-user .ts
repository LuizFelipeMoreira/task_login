import { UserRepository } from '../../repositories/user-repositories';

class LoginUserUseCase {
    constructor(private readonly prismaUserRepository: UserRepository) {}

    async execute() {}
}

export { LoginUserUseCase };
