import { Request, Response } from "express";

import { OrderService } from "../services/order.service";
import { OrdersQueryDto } from "../dtos/orders-query.dto";
import { SuccessResponseDto } from "../dtos/success-response.dto";
import { OrdersQuerySchema } from "../validators/orders-query.validator";

export class OrderController {
  constructor(private readonly orderService: OrderService = new OrderService()) {}

  async getOrdersByFilter(req: Request, res: Response) {
    const ordersQuery: OrdersQueryDto = OrdersQuerySchema.parse(req.query);

    const orders = await this.orderService.getOrdersByFilter(ordersQuery);

    res.json(new SuccessResponseDto(orders));
  }
}
