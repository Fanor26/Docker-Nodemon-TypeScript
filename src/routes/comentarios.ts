import { Router } from "express";
import { comentController } from "../controllers/comentController";
const  router: Router=Router();
router.get('/', comentController.getComents);
router.post('/post', comentController.postComent)
export default router;
