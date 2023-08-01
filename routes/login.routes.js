import { Router } from "express";
import bodyParser from "body-parser";

import { loginView, userLogin } from "../controllers/loginController.js";

export const router = Router();
var jsonParser = bodyParser.json();
router.get("/login", loginView);
router.post("/login", jsonParser, userLogin);
export default router;
