import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../use-cases/auth/register-user';
import PrismaUserRepository from '../../repositories/prisma/prisma-user-repository';
import { any, z } from 'zod';

class UserController {
    public async signup(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Preencha todos os campos' });
        }
        try {
            const registerUserUseCase = new RegisterUserUseCase(PrismaUserRepository);
            const user = await registerUserUseCase.execute({ name, email, password });

            res.status(201).json({
                message: 'Usuário criado com sucesso',
                user: {
                    id: user?.id,
                    email: user?.email,
                    name: user?.name,
                },
            });
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: 'Erro de validação',
                    errors: error.errors, // Detalhes dos erros do Zod
                });
            }

            // Outros erros (por exemplo, usuário já existente)
            return res
                .status(500)
                .json({ message: error.message || 'Erro interno do servidor' });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        return res.status(200).json({ message: 'So um teste' });
    }

    public async logout(req: Request, res: Response): Promise<void> {
        return res.status(200).json({ message: 'So um teste de logout' });
    }
}

export default new UserController();
