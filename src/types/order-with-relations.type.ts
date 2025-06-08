import { Order } from "@prisma/client";
import { OrderItemWithRelations } from "./order-item-with-relations.type";

export type OrderWithRelations = Order & {
  items: OrderItemWithRelations[];
};
