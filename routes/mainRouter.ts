import express from 'express';
import { fakePrivateRouter } from '@routes/private/fakeRouter';
import { customersRouter } from '@routes/public/customersRouter';
import { reviewsRouter } from '@routes/public/reviewsRouter';

export const mainRouter = express.Router();

const privateRouter = [fakePrivateRouter];
const publicRouter = [customersRouter, reviewsRouter];

mainRouter.use('/private', privateRouter);
mainRouter.use('/public', publicRouter);
