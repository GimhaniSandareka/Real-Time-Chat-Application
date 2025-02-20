import  express  from 'express';
import { login, logout, signup,getMe } from '../controllers/auth.controller.js';
import protectRoute from '../middleware/protectRoute.js';


const router = express.Router();

router.get("/me",protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// <url>/api/auth/signup
//currently it's http://localhost:5000/api/auth/signup


export default router;