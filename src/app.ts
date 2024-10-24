import express from 'express';
import routes from './controllers/auth/user.routes';

export const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {});

app.use('/', routes);

app.listen(8181, () => {
    console.log('Servidor iniciado com sucesso na porta 8181 🚀');
});
