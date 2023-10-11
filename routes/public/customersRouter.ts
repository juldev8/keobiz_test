import express from 'express';
import * as CustomersController from '@controllers/public/customersController';

export const customersRouter = express.Router();

customersRouter.get('/customers', CustomersController.index);
