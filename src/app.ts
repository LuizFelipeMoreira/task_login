import express, { Request, Response } from 'express';
import routes from './controllers/auth/user.routes';
import { ErrorHandling } from './middlewares/ErrorMiddleware';

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

app.use(ErrorHandling);

app.listen(8181, () => {
    console.log('Servidor iniciado com sucesso na porta 8181 🚀');
});
