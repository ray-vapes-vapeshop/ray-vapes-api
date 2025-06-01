import { z as zod } from "zod";
import { OrdersQuerySchema } from "../validators/orders-query.validator";

export type OrdersQueryDto = zod.infer<typeof OrdersQuerySchema>;
