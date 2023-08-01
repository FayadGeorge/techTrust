import { Router } from "express";
import {
  getServices,
  createService,
} from "../controllers/servicesController.js";
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
const router = Router();

router.get("/dashboard", getServices);
router.post("/dashboard/service", jsonParser, createService);
export default router;
