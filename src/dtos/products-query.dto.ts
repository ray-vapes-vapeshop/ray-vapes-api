import { z as zod } from "zod";
import { ProductsQuerySchema } from "../validators/products-query.validator";

export type ProductsQueryDto = zod.infer<typeof ProductsQuerySchema>;
