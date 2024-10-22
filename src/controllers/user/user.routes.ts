import express from 'express';
import UserController from './user-controller';
import { userSchema } from '../../validations/auth-schemas';
import { validateRequest } from '../../middlewares/ValidateRequest';

const router = express.Router();

router.post('/signup', validateRequest(userSchema), UserController.signup);

router.post('/login', UserController.login);

router.post('/logout', UserController.logout);

export default router;
