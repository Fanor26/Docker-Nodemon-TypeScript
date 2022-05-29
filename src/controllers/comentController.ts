import { Request, Response } from "express";

class ComentController{
    public index (req : Request, res : Response){
        res.send('I am a comment Fanor Typescript 2022');
    }
}
export const comentController = new ComentController();
