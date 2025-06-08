import { OrderItem, ProductType } from "@prisma/client";

export type OrderItemWithRelations = OrderItem & {
  product: {
    name: string;
    type: ProductType;
    description: string | null;
    imageUrl: string | null;
    isBestseller: boolean;
  };
};
