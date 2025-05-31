import { z as zod } from "zod";
import validationConstant from "../constants/validation.constant";

export const UuidParamSchema = zod.object({
  params: zod.object({
    id: zod.string().uuid(validationConstant.INVALID_UUID_FORMAT),
  }),
});
