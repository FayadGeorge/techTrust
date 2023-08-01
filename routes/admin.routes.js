import bodyParser from "body-parser";
import { Router } from "express";
import {
  createUser,
  deleteUser,
  getStaff,
  registerView,
} from "../controllers/adminController.js";
import { getRoles } from "../controllers/rolesController.js";
import { authUser } from "../controllers/authentications/authentications.js";

const router = Router();
var jsonParser = bodyParser.json();

router.get("/roles", getRoles);
router.get("dashboard/register", registerView);
router.post("dashboard/users", jsonParser, createUser);
router.delete("dashboard/users/:id", deleteUser);
router.get("/dashboard", getStaff);
export default router;
