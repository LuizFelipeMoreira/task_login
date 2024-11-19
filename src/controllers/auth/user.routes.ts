import express from 'express';
import AuthController from './auth-controller';
import { loginSchema, userSchema } from '../../validations/auth-schemas';
import { validateRequest } from '../../middlewares/ValidateRequest';

const router = express.Router();

router.post('/signup', validateRequest(userSchema), AuthController.signup);

router.post('/login', validateRequest(loginSchema), AuthController.login);

router.post('/logout', AuthController.logout);

export default router;
