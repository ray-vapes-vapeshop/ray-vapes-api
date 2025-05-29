import { z as zod } from "zod";

export const PageQuerySchema = zod.object({
  currentPage: zod.coerce.number().int().positive().optional().default(1),
  pageSize: zod.coerce.number().int().positive().optional().default(10),
  sortBy: zod.record(zod.enum(["asc", "desc"])).default({ id: "asc" }),
});
