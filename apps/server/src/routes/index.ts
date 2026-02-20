import { Router } from "express";
import signupUserController from "../controllers/SignupUserControlller";
import authMiddleware from "../middlewares/authMiddleware";
import signinUserController from "../controllers/signinUserController";



const router: Router = Router();


//user_controller
router.post("/auth/signup", signupUserController);
router.post("/auth/signin",signinUserController);





router.get("/auth/me", authMiddleware, (req, res) => {
  res.json({
    message: "Authorized",
    user: req.user
  });
});




export default router;