import { Router } from "express";
import { usersController } from "../controllers/userControllers";
const  router: Router=Router();
router.get('/getusers', usersController.getUsers);
router.post('/postuser', usersController.postUser);
router.get('/getuser/:id',usersController.getOneUser)
router.put('/updateuser/:id',usersController.putUser)

export default router;
