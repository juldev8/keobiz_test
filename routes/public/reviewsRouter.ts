import express from 'express';
import * as ReviewsController from '@controllers/public/reviewsController';

export const reviewsRouter = express.Router();

reviewsRouter.get('/reviews', ReviewsController.index);
reviewsRouter.get('/reviews/:id', ReviewsController.show);
reviewsRouter.post('/reviews', ReviewsController.create);
reviewsRouter.delete('/reviews/:id', ReviewsController.delete_);
