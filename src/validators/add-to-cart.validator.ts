import { z as zod } from "zod";
import validationConstant from "../constants/validation.constant";

export const AddToCartSchema = zod.object({
  body: zod.object({
    productId: zod.string().uuid(validationConstant.INVALID_UUID_FORMAT),
    quantity: zod.coerce.number().int().optional().default(1),
  }),
});
