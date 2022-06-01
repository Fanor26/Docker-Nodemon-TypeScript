import { Router } from "express";
import { comentController } from "../controllers/comentController";
const  router: Router=Router();
router.get('/get', comentController.getComents);

router.post('/post', comentController.postComent);
router.delete('/delete/:id', comentController.deleteComent);
router.put('/update/:id', comentController.updateComent);

export default router;
