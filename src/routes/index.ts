import { Router } from "express";

import { ExampleRouter } from "./example.route";
import { ProductsRouter } from "./products.route";

const router = Router();

router.use("/example", ExampleRouter);

router.use("/products", ProductsRouter);

export default router;
