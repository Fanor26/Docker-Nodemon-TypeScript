import { Request, Response } from "express";
import comentModel from "../models/comentModel";
class ComentController{
    public async getComents (req : Request, res : Response){
        try{
            const coments = await comentModel.find({});
            res.json(coments);
        } catch (error){
            console.log(error);
        }
    }
    public  async postComent (req : Request, res : Response){
        const body=req.body;
        console.log(body);
        try{
            const comentarioDB = new comentModel(body);
            await comentarioDB.save();
            res.send(' Comentario insertado correctamente');
        }catch(error){
            console.log(error);
        }
        
    }
    public async deleteComent (req : Request, res : Response){
        const id = req.params.id;
        console.log(id);
        try{
            const comentarioDB = await comentModel.findByIdAndDelete({_id:id});
            if(comentarioDB){
                res.send('Comment removed successfully')
            }else{
                res.send('Error deleting comment')
            }
        }catch (error){
            console.log(error);

        }
       
    }
    public updateComent (req : Request, res : Response){
       
    }


}
export const comentController = new ComentController();
