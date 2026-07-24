import express from "express";
import { signin, signup, signOut } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signin", signin);
authRouter.post("/signup", signup);
authRouter.post("/signout", signOut);

export default authRouter;
