import { Request, Response } from "express";

class IndexController{
    public index (req : Request, res : Response){
        res.send('Hello Wordl from Routes Typescript Cheers');
    }
}
export const indexController = new IndexController();
