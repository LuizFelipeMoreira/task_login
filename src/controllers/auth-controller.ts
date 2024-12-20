import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { Body, Controller, Post, Req, Res } from 'routing-controllers';
import PrismaUserRepository from '../repositories/prisma/prisma-user-repository';
import { LoginUserUseCase } from '../use-cases/auth/login-user ';
import { RegisterUserUseCase } from '../use-cases/auth/register-user';

type UserResponse = Prisma.UserCreateInput;

@Controller('/auth')
export class AuthController {
    constructor() {}

    @Post('/signup')
    public async signup(@Body() body: UserResponse, @Res() res: Response) {
        const { name, email, password } = body;

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
            return res
                .status(500)
                .json({ message: error.message || 'Erro interno do servidor' });
        }
    }

    @Post('/login')
    public async login(@Body() body: UserResponse, @Res() res: Response) {
        const { email, password } = body;

        try {
            const loginUserUseCase = new LoginUserUseCase(PrismaUserRepository);
            const user = await loginUserUseCase.execute({ email, password });

            return res.status(200).json({
                message: 'Usuario logado com sucesso',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (error: any) {
            return res
                .status(500)
                .json({ message: error.message || 'Erro interno do servidor' });
        }
    }

    @Post('logout')
    public async logout(@Req() req: Request, @Res() res: Response) {
        return res.status(200).json({ message: 'So um teste de logout' });
    }
}
