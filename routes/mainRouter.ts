import express from 'express';
import { fakePrivateRouter } from '@routes/private/fakeRoutes';

export const mainRouter = express.Router();

const privateRouter = [fakePrivateRouter];

mainRouter.use('/private', privateRouter);
