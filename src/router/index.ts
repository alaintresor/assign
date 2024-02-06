import express from 'express';
import { Router } from 'express';
import authRouter from './userRouter';
import bookRouter from './bookRouter';

const router: Router = express.Router();

router.use('/auth', authRouter);
router.use('/books', bookRouter);

export default router;