import {Request, Response} from 'express'

export const getHome = (req: Request, res: Response) => {
    return res.json({ message: 'Welcome to Nuzi!' });
  };