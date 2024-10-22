import { UserRepository } from '../../repositories/user-repositories';

class LogoutUserUseCase {
    constructor(private readonly prismaUserRepository: UserRepository) {}

    async execute() {}
}
