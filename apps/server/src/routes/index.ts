import { Router } from "express";
import signupUserController from "../controllers/SignupUserControlller";



const router: Router = Router();


//user_controller
router.post("/auth/signup", signupUserController);



export default router;