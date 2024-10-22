import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});
