import express, {Application, Request, Response, NextFunction} from "express";
import cors from "cors";
import helmet from "helmet";

export default function configure(app: Application) {
  app
    //body parser
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    //cors
    .use(cors())
    .use(helmet())
    .use(express.static("public"));
}
