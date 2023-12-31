import express from 'express';
import * as CustomersController from '@controllers/public/customersController';

export const customersRouter = express.Router();

customersRouter.get('/customers', CustomersController.index);
customersRouter.get('/customers/:id', CustomersController.show);
customersRouter.post('/customers', CustomersController.create);
customersRouter.delete('/customers/:id', CustomersController.delete_);
customersRouter.put('/customers/:id', CustomersController.update);
