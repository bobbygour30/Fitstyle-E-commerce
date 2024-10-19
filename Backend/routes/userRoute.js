import express from "express";
import { adminLogin, login, registerUser } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", login);
userRouter.post("/admin", adminLogin);

export default userRouter