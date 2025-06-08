import { prisma } from "../../prisma/client";
import { OrderStatus, Prisma } from "@prisma/client";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { OrdersQueryDto } from "../dtos/orders-query.dto";
import { OrdersFilterBuilder } from "../utils/orders-filter-builder.util";
import { PageRequest } from "../utils/page-request.util";

export class OrderRepository {
  private readonly orderRepository = prisma.order;

  async getOrdersByFilter(query: OrdersQueryDto, pageRequest: PageRequest) {
    const where = this.ordersSearchFilter(query);

    const options: Prisma.OrderFindManyArgs = {
      where,
      ...pageRequest.getFilter(),
      include: {
        items: {
          include: {
            product: {
              select: {
                name: true,
                type: true,
                description: true,
                imageUrl: true,
                isBestseller: true,
              },
            },
          },
        },
      },
    };

    return await this.orderRepository.findMany(options);
  }

  async getCountOrdersByFilter(query: OrdersQueryDto) {
    const where = this.ordersSearchFilter(query);
    return await this.orderRepository.count({ where });
  }

  async getOrderById(orderId: string) {
    return await this.orderRepository.findUnique({
      where: { id: orderId },
    });
  }

  async getOrderWithRelationsById(orderId: string) {
    return await this.orderRepository.findUnique({
      where: {
        id: orderId,
      },
      include: {
        items: {
          include: {
            product: {
              select: {
                name: true,
                type: true,
                description: true,
                imageUrl: true,
                isBestseller: true,
              },
            },
          },
        },
      },
    });
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    const { items, ...orderData } = createOrderDto;

    return await this.orderRepository.create({
      data: {
        ...orderData,
        pickupLocation: orderData.pickupLocation ?? null,
        phoneNumber: orderData.phoneNumber ?? null,
        deliveryNotes: orderData.deliveryNotes ?? null,
        priceCents: items.reduce((total, item) => total + item.priceCents, 0),
        items: {
          create: items.map((item) => ({
            quantity: item.quantity,
            priceCents: item.priceCents,
            variantId: item.variantId ?? null,
            product: {
              connect: { id: item.productId },
            },
          })),
        },
      },
      include: {
        items: true,
      },
    });
  }

  private ordersSearchFilter(query: OrdersQueryDto) {
    return new OrdersFilterBuilder()
      .filerByMultipleFields(query.search)
      .filerByLocation(query.location)
      .orderStatusFilter(query.orderStatus as OrderStatus)
      .priceFilter(query.minPriceCents, query.maxPriceCents)
      .dateFilter(query.dateFrom, query.dateTo)
      .build();
  }
}
