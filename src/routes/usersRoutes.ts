import { Router } from "express";
import { usersController } from "../controllers/userControllers";
const  router: Router=Router();
router.get('/getusers', usersController.getUsers);


export default router;
