import { z as zod } from "zod";

import { PageQuerySchema } from "./page-query.validator";
import { OrderStatus } from "@prisma/client";
import validationConstant from "../constants/validation.constant";

export const OrdersQuerySchema = PageQuerySchema.merge(
  zod.object({
    search: zod.string().optional(),
    orderStatus: zod.nativeEnum(OrderStatus).optional(),
    minPriceCents: zod.coerce.number().optional(),
    maxPriceCents: zod.coerce.number().optional(),
    dateFrom: zod
      .string()
      .optional()
      .refine(
        (val) => {
          if (!val) return true;
          return !isNaN(Date.parse(val));
        },
        { message: validationConstant.INVALID_START_DATE },
      ),
    dateTo: zod
      .string()
      .optional()
      .refine(
        (val) => {
          if (!val) return true;
          return !isNaN(Date.parse(val));
        },
        { message: validationConstant.INVALID_END_DATE },
      ),
  }),
);
