import { NotFound } from "http-errors";

import { CreateOrderDto } from "../dtos/create-order.dto";
import { OrdersQueryDto } from "../dtos/orders-query.dto";
import { OrderRepository } from "../repositories/order.repository";
import errorConstant from "../constants/error.constant";
import { ProductsRepository } from "../repositories/products.repository";
import { PageRequest } from "../utils/page-request.util";
import { PageResponse } from "../utils/page-response.util";

export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository = new OrderRepository(),
    private readonly productsRepository: ProductsRepository = new ProductsRepository(),
  ) {}

  async getOrdersByFilter(ordersQuery: OrdersQueryDto) {
    const pageRequest = new PageRequest(ordersQuery);

    const [orders, count] = await Promise.all([
      this.orderRepository.getOrdersByFilter(ordersQuery, pageRequest),
      this.orderRepository.getCountOrdersByFilter(ordersQuery),
    ]);

    return new PageResponse(pageRequest, orders, count);
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
    return await this.orderRepository.getOrderWithRelationsById(orderId);
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
