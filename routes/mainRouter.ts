import express from 'express';
import { fakePrivateRouter } from '@routes/private/fakeRouter';
import { customersRouter } from '@routes/public/customersRouter';

export const mainRouter = express.Router();

const privateRouter = [fakePrivateRouter];
const publicRouter = [customersRouter];

mainRouter.use('/private', privateRouter);
mainRouter.use('/public', publicRouter);
