import express from 'express';
import 'reflect-metadata';
import routes from './controllers/auth/user.routes';
import { ErrorHandling } from './middlewares/ErrorMiddleware';
import { useExpressServer } from 'routing-controllers';
import { AuthController } from './controllers/auth-controller';

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

useExpressServer(app, {
    controllers: [AuthController],
});

//app.use('/', routes);

app.use(ErrorHandling);

app.listen(8181, () => {
    console.log('Servidor iniciado com sucesso na porta 8181 🚀');
});
