import { Router } from "express";

import { limiter } from "../middlewares/limiter.middleware";
import { validate } from "../middlewares/validate.middleware";
import { catchHandler } from "../middlewares/catch.middleware";
import { timeConstant } from "../constants/time.constant";
import { OrderController } from "../controllers/order.controller";
import { OrdersQuerySchema } from "../validators/orders-query.validator";
import { UuidParamSchema } from "../validators/uuid-param.schema";
import { CreateOrderSchema } from "../validators/create-order.validator";
import { mapParam } from "../mappers/param.mapper";

export const OrderRouter = Router();

const orderController = new OrderController();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders endpoints
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     tags: [Orders]
 *     description: Retrieves a list of orders based on the provided query parameters, pagination and filtering.
 *     parameters:
 *       - $ref: '#/components/parameters/currentPage'
 *       - $ref: '#/components/parameters/pageSize'
 *       - $ref: '#/components/parameters/sortBy'
 *       - $ref: '#/components/parameters/search'
 *       - $ref: '#/components/parameters/orderStatus'
 *       - $ref: '#/components/parameters/minPriceCents'
 *       - $ref: '#/components/parameters/maxPriceCents'
 *       - $ref: '#/components/parameters/dateFrom'
 *       - $ref: '#/components/parameters/dateTo'
 *     responses:
 *       200:
 *         description: Successful response with paginated orders data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         totalItems:
 *                           type: integer
 *                           example: 100
 *                         currentPage:
 *                           type: integer
 *                           example: 1
 *                         pageSize:
 *                           type: integer
 *                           example: 10
 *                         totalPages:
 *                           type: integer
 *                           example: 10
 *                     items:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/CurrentOrder'
 *       400:
 *         description: Invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
OrderRouter.get(
  "/",
  validate(OrdersQuerySchema),
  limiter(timeConstant.FIVE_SECONDS, 1, true),
  catchHandler(orderController.getOrdersByFilter.bind(orderController)),
);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   get:
 *     tags: [Orders]
 *     description: Retrieves a order by its id.
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: order uuid
 *     responses:
 *       200:
 *         description: Successful response with order data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/CurrentOrder'
 *             examples:
 *               OrderExample:
 *                 $ref: '#/components/examples/OrderExample'
 *       400:
 *         description: Invalid product id format.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
OrderRouter.get(
  "/:orderId",
  mapParam("orderId", "id"),
  validate(UuidParamSchema),
  limiter(timeConstant.FIVE_SECONDS, 1, true),
  catchHandler(orderController.getOrderById.bind(orderController)),
);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     tags: [Orders]
 *     description: Creates a new order with the provided cart items.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               $ref: '#/components/schemas/CreateOrder'
 *     responses:
 *       201:
 *         description: Order created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     $ref: '#/components/schemas/CurrentOrder'
 *       400:
 *         description: Invalid input data.
 *       500:
 *         description: Internal server error.
 */
OrderRouter.post(
  "/",
  validate(CreateOrderSchema), // ! this schema is empty, it should be updated next
  limiter(timeConstant.TEN_SECONDS, 1, true),
  catchHandler(orderController.createOrder.bind(orderController)),
);
