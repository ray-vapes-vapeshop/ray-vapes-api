import { z as zod } from "zod";
import { PageQuerySchema } from "./page-query.validator";
import { ProductType } from "@prisma/client";

export const ProductsQuerySchema = PageQuerySchema.merge(
  zod.object({
    type: zod.nativeEnum(ProductType).optional(),
    isBestseller: zod.preprocess((value) => {
      if (value === "false") return false;
      if (value === "true") return true;
      return;
    }, zod.boolean().optional()),
  }),
);
