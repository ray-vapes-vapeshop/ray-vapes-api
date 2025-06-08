import { NotFound } from "http-errors";
import { prisma } from "../../prisma/client";

import { CreateOrderDto } from "../dtos/create-order.dto";
import { OrdersQueryDto } from "../dtos/orders-query.dto";
import { OrderRepository } from "../repositories/order.repository";
import errorConstant from "../constants/error.constant";
import { ProductsRepository } from "../repositories/products.repository";
import { PageRequest } from "../utils/page-request.util";
import { PageResponse } from "../utils/page-response.util";
import { OrderItemVariantResolver } from "../utils/order-item-variant-resolver.util";
import { OrderWithRelations } from "../types/order-with-relations.type";
import { OrderItemWithRelations } from "../types/order-item-with-relations.type";

export class OrderService {
  private readonly variantResolver: OrderItemVariantResolver;

  constructor(
    private readonly orderRepository: OrderRepository = new OrderRepository(),
    private readonly productsRepository: ProductsRepository = new ProductsRepository(),
  ) {
    this.variantResolver = new OrderItemVariantResolver(prisma);
  }

  async getOrdersByFilter(ordersQuery: OrdersQueryDto) {
    const pageRequest = new PageRequest(ordersQuery);

    const [orders, count] = await Promise.all([
      this.orderRepository.getOrdersByFilter(ordersQuery, pageRequest),
      this.orderRepository.getCountOrdersByFilter(ordersQuery),
    ]);

    const ordersWithResolvedVariants = await Promise.all(
      (orders as OrderWithRelations[]).map(async (order) => ({
        ...order,
        items: await Promise.all(
          order.items.map(async (item: OrderItemWithRelations) => {
            const variant = await this.variantResolver.resolveVariant(item);
            return {
              ...item,
              product: {
                name: item.product.name,
                type: item.product.type,
                variant: variant
                  ? {
                      id: variant.id,
                      flavour: variant.flavour,
                    }
                  : null,
              },
            };
          }),
        ),
      })),
    );

    return new PageResponse(pageRequest, ordersWithResolvedVariants, count);
  }

  async getOrderById(orderId: string) {
    return await this.orderRepository.getOrderById(orderId);
  }

  async getOrderByIdOrThrow(orderId: string) {
    const order = await this.getOrderById(orderId);

    if (!order) {
      throw new NotFound(errorConstant.ORDER_NOT_FOUND);
    }

    return order;
  }

  async getOrderWithRelationsById(orderId: string) {
    const order = await this.orderRepository.getOrderWithRelationsById(orderId);

    if (!order) {
      throw new NotFound(errorConstant.ORDER_NOT_FOUND);
    }

    const orderWithResolvedVariants = {
      ...order,
      items: await Promise.all(
        (order as OrderWithRelations).items.map(async (item: OrderItemWithRelations) => {
          const variant = await this.variantResolver.resolveVariant(item);
          return {
            ...item,
            product: {
              name: item.product.name,
              type: item.product.type,
              variant: variant
                ? {
                    id: variant.id,
                    flavour: variant.flavour,
                  }
                : null,
            },
          };
        }),
      ),
    };

    return orderWithResolvedVariants;
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    const productIds = [...new Set(createOrderDto.items.map((item) => item.productId))];

    const existingProducts = await this.productsRepository.getProductsByIds(productIds);

    if (existingProducts.length !== productIds.length) {
      throw new NotFound(errorConstant.PRODUCTS_NOT_FOUND);
    }

    return await this.orderRepository.createOrder(createOrderDto);
  }
}
