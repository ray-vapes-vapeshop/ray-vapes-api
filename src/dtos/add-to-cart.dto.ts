import { z as zod } from "zod";
import { AddToCartSchema } from "../validators/add-to-cart.validator";

export type AddToCartDto = zod.infer<typeof AddToCartSchema>;
