import express from 'express';
import { AuthController } from './auth-controller';
import { loginSchema, userSchema } from '../../validations/auth-schemas';
import { validateRequest } from '../../middlewares/ValidateRequest';

const router = express.Router();
const authController = new AuthController();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

export default router;
