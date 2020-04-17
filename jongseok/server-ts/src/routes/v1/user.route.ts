import express from 'express';
import { login, me, register } from '../../controllers/v1/user.controller';
import { requireAuth } from '../../middlewares/requireAuth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', requireAuth, me);

export default router;
