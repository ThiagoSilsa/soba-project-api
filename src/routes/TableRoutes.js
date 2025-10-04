import { Router } from "express";
import TableController from "../controllers/TableController.js";

const router = Router();

router.get("/tables", TableController.getTables);
export default router;
