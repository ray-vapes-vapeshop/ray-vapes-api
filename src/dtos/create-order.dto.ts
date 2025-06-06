import { z as zod } from "zod";
import { CreateOrderSchema } from "../validators/create-order.validator";

export type CreateOrderDto = zod.infer<typeof CreateOrderSchema>["body"];
