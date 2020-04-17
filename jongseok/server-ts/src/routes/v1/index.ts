import express from 'express';
import userRouters from './user.route';

const router = express.Router();

router.use('/user', userRouters);

export default router;
