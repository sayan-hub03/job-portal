import  express  from "express";
import { testPostController } from "../controller/testController.js";
import userAuth from "../middlewares/authMiddlewares.js";

//router object
const router = express.Router()

//routes
router.post('/test-post', userAuth, testPostController)

export default router;