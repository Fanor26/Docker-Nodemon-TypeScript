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
}
export const usersController = new UserContoller();