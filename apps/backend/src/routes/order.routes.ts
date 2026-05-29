import { Router } from "express";
import * as orderController from "../controllers/order.controller";

const router: Router = Router();

router.post("/order", orderController.createOrder);

export default router;
