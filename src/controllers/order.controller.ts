import { Request, Response } from "express";

import { OrderService } from "../services/order.service";
import { OrdersQueryDto } from "../dtos/orders-query.dto";
import { SuccessResponseDto } from "../dtos/success-response.dto";
import { CreateOrderDto } from "../dtos/create-order.dto";
import { mapOrdersQueryToDto } from "../mappers/order-query.mapper";

export class OrderController {
  constructor(private readonly orderService: OrderService = new OrderService()) {}

  async getOrdersByFilter(req: Request, res: Response) {
    const ordersQuery: OrdersQueryDto = mapOrdersQueryToDto(req.body);

    const orders = await this.orderService.getOrdersByFilter(ordersQuery);

    res.json(new SuccessResponseDto(orders));
  }

  async getOrderById(req: Request, res: Response) {
    const orderId = req.params["id"];

    const order = await this.orderService.getOrderWithRelationsById(orderId!);

    res.json(new SuccessResponseDto(order));
  }

  async createOrder(req: Request, res: Response) {
    const createOrderRequest: CreateOrderDto = req.body;

    const order = await this.orderService.createOrder(createOrderRequest);

    res.json(new SuccessResponseDto(order));
  }
}
