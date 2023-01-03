import {Request, Response} from "express";

export const getUsers = (req: Request, res: Response) => {
  return res.json({message: "Users Welcome to Nuzi!"});
};
