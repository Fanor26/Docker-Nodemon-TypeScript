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
}

export const usersController = new UserContoller();