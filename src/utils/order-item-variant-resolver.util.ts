import { PrismaClient, ProductType } from "@prisma/client";
import { OrderItemWithRelations } from "../types/order-item-with-relations.type";

export class OrderItemVariantResolver {
  constructor(private readonly prisma: PrismaClient) {}

  async resolveVariant(item: OrderItemWithRelations) {
    if (!item.variantId) return null;

    switch (item.product.type) {
      case ProductType.ELECTRONIC_CIGARETTE: {
        return await this.prisma.electronicVariant.findUnique({
          where: { id: item.variantId },
          include: { flavour: true },
        });
      }

      case ProductType.LIQUID: {
        return await this.prisma.liquidVariant.findUnique({
          where: { id: item.variantId },
          include: { flavour: true },
        });
      }

      case ProductType.SNUS: {
        return await this.prisma.snusVariant.findUnique({
          where: { id: item.variantId },
          include: { flavour: true },
        });
      }

      default:
        return null;
    }
  }
}
