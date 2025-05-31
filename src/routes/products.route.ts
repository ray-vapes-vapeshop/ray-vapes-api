import { Router } from "express";

import { limiter } from "../middlewares/limiter.middleware";
import { validate } from "../middlewares/validate.middleware";
import { catchHandler } from "../middlewares/catch.middleware";
import { timeConstant } from "../constants/time.constant";
import { ProductsController } from "../controllers/products.controller";
import { ProductsQuerySchema } from "../validators/products-query.validator";
import { UuidParamSchema } from "../validators/uuid-param.schema";
import { mapParam } from "../mappers/param.mapper";

export const ProductsRouter = Router();

const productsController = new ProductsController();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products endpoints
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Products]
 *     description: Retrieves a list of products based on the provided query parameters, pagination and filtering.
 *     parameters:
 *       - $ref: '#/components/parameters/currentPage'
 *       - $ref: '#/components/parameters/pageSize'
 *       - $ref: '#/components/parameters/sortBy'
 *       - $ref: '#/components/parameters/type'
 *       - $ref: '#/components/parameters/isBestseller'
 *     responses:
 *       200:
 *         description: Successful response with paginated products data.
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
 *                         $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
ProductsRouter.get(
  "/",
  validate(ProductsQuerySchema),
  limiter(timeConstant.FIVE_SECONDS, 1, true),
  catchHandler(productsController.getProducts.bind(productsController)),
);

/**
 * @swagger
 * /api/products/{productId}:
 *   get:
 *     tags: [Products]
 *     description: Retrieves a product by its id.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: product uuid
 *     responses:
 *       200:
 *         description: Successful response with product data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *             examples:
 *               ElectronicCigaretteExample:
 *                 $ref: '#/components/examples/ElectronicCigarette'
 *       400:
 *         description: Invalid product id format.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
ProductsRouter.get(
  "/:productId",
  mapParam("productId", "id"),
  validate(UuidParamSchema),
  limiter(timeConstant.FIVE_SECONDS, 1, true),
  catchHandler(productsController.getProductById.bind(productsController)),
);
