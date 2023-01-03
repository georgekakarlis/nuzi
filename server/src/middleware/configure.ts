import express, {Application, Request, Response, NextFunction} from "express";
import path, {resolve} from "path";
import {json} from "body-parser";
import cors from "cors";

export default function configure(app: Application) {
  app
    //body parser
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    //cors
    .use(cors())
    .use(express.static("public")) 
    
}
