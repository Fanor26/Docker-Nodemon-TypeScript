import { Request, Response} from "express";
import UserModel from "../models/usersModel"

class UserContoller{
    public async getUsers(req :Request, res : Response){
        try{
            const users= await UserModel.find({});
            res.json(users);

        }catch(error){
            console.log(error)
        }
    }
    public async postUser(req: Request, res : Response){
        const body =req.body;
        try{
            const userDb = new UserModel(body);
            await userDb.save()
            res.send('User inserted successfully')

        }catch(error){
            console.log(error)
        }
    }
    public async getOneUser(req: Request, res : Response){
        try{
            const id =req.params.id;
            const userDB = await UserModel.findOne({_id:id});
            res.json({
                user: userDB,
                error: false
            })
           
        }catch(error){
            console.log(error)
            res.json({
                error: true,
                sms: "Username does not exist"
            })
        }
    }
    public async putUser(req : Request, res : Response){
        const id = req.params.id;
        const body = req.body;
        try{
            await UserModel.findByIdAndUpdate(id, body);
            res.json({
                error: true,
                sms: "user updated successfully"
            })


        }catch(error){
            console.log(error)
            res.json({
                error: true,
                sms: "Error updating user"
            })
        }
    }
}

export const usersController = new UserContoller();