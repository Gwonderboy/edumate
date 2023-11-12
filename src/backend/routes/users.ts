import express from "express";
import { registerUser } from "../controllers/registration";
import { loginUser } from "../controllers/login";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
