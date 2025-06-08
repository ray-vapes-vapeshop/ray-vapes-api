import { z as zod } from "zod";

import { OrderMethod } from "@prisma/client";
import validationConstant from "../constants/validation.constant";

export const CreateOrderSchema = zod.object({
  body: zod.object({
    firstName: zod.string().min(2, validationConstant.FIELD_REQUIRED),
    lastName: zod.string().min(2, validationConstant.FIELD_REQUIRED),
    address: zod.string().min(2, validationConstant.FIELD_REQUIRED),
    email: zod.string().email(validationConstant.FIELD_REQUIRED),
    telegramNickname: zod.string().min(1, validationConstant.FIELD_REQUIRED),
    orderMethod: zod.nativeEnum(OrderMethod),
    pickupLocation: zod.string().optional(),
    phoneNumber: zod.string().optional(),
    deliveryNotes: zod.string().optional(),

    items: zod
      .array(
        zod.object({
          productId: zod.string().uuid(validationConstant.INVALID_UUID_FORMAT),
          quantity: zod.number().int().positive(validationConstant.MUST_BE_POSITIVE),
          priceCents: zod.number().int().positive(validationConstant.MUST_BE_POSITIVE),
          variantId: zod.string().uuid(validationConstant.INVALID_UUID_FORMAT).optional(),
        }),
      )
      .nonempty(validationConstant.AT_LEAST_ONE_ITEM_REQUIRED),
  }),
});
