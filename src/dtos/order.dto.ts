import { OrderMethod, OrderStatus } from "@prisma/client";
import { OrderItemDto } from "./order-item.dto";

export class OrderDto {
  id!: string;
  firstName!: string;
  lastName!: string;
  address!: string;
  email!: string;
  telegramNickname!: string;
  priceCents!: number;
  orderStatus!: OrderStatus;
  orderMethod!: OrderMethod;
  pickupLocation?: string;
  phoneNumber?: string;
  deliveryNotes?: string;
  createdAt!: Date;
  updatedAt!: Date;
  items?: OrderItemDto[];
}
