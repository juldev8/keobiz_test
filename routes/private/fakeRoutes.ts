import express, { Request, Response } from 'express';

export const fakePrivateRouter = express.Router();

fakePrivateRouter.get('/fake', (_:Request, res:Response):Response => res.send("I'm working"));
