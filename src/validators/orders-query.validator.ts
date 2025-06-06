import { z as zod } from "zod";

import { PageQuerySchema } from "./page-query.validator";
import { OrderStatus } from "@prisma/client";

export const OrdersQuerySchema = PageQuerySchema.merge(
  zod.object({
    search: zod.string().optional(),
    location: zod.string().optional(),
    orderStatus: zod.nativeEnum(OrderStatus).optional(),
    minPriceCents: zod.coerce.number().optional(),
    maxPriceCents: zod.coerce.number().optional(),
    dateFrom: zod.string().optional(),
    dateTo: zod.string().optional(),
  }),
);
