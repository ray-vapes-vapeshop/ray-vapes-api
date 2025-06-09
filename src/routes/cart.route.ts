import { Router } from "express";

import { limiter } from "../middlewares/limiter.middleware";
import { validate } from "../middlewares/validate.middleware";
import { catchHandler } from "../middlewares/catch.middleware";
import { timeConstant } from "../constants/time.constant";
import { CartController } from "../controllers/cart.controller";
import { AddToCartSchema } from "../validators/add-to-cart.validator";
import { mapParam } from "../mappers/param.mapper";
import { UuidParamSchema } from "../validators/uuid-param.schema";

export const CartRouter = Router();

const cartController = new CartController();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart endpoints
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     description: Retrieves the contents of the user's shopping cart.
 *     responses:
 *       200:
 *         description: Successful response with cart contents
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CartItem'
 *       500:
 *         description: Internal server error.
 */
CartRouter.get(
  "/",
  limiter(timeConstant.ONE_SECOND, 3, true),
  catchHandler(cartController.getCartContents.bind(cartController)),
);

/**
 * @swagger
 * /api/cart:
 *   post:
 *     tags: [Cart]
 *     description: Add a product to the user's shopping cart.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddToCartRequest'
 *     responses:
 *       200:
 *         description: Product added to cart successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/CartItem'
 *       400:
 *         description: Invalid input data.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
CartRouter.post(
  "/",
  validate(AddToCartSchema),
  limiter(timeConstant.ONE_SECOND, 3, true),
  catchHandler(cartController.addToCart.bind(cartController)),
);

/**
 * @swagger
 * /api/cart/{productId}:
 *   patch:
 *     tags: [Cart]
 *     description: Update the `quantity of a product` by id in the cart.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The UUID of the product to update in the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 minimum: 1
 *                 example: 2
 *             required:
 *               - quantity
 *     responses:
 *       200:
 *         description: Cart item updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/CartItem'
 *       400:
 *         description: Invalid input data.
 *       404:
 *         description: Product not found in cart.
 *       500:
 *         description: Internal server error.
 */
CartRouter.patch(
  "/:productId",
  mapParam("productId", "id"),
  validate(UuidParamSchema),
  limiter(timeConstant.ONE_SECOND, 3, true),
  catchHandler(cartController.updateCart.bind(cartController)),
);

/**
 * @swagger
 * /api/cart:
 *   delete:
 *     tags: [Cart]
 *     description: Remove all items from the user's shopping cart.
 *     responses:
 *       200:
 *         description: All items removed from cart successfully.
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
 *                     message:
 *                       type: string
 *                       example: Cart cleared successfully
 *       500:
 *         description: Internal server error.
 */
CartRouter.delete(
  "/",
  limiter(timeConstant.ONE_SECOND, 3, true),
  catchHandler(cartController.removeAllFromCart.bind(cartController)),
);

/**
 * @swagger
 * /api/cart/{productId}:
 *   delete:
 *     tags: [Cart]
 *     description: Remove a specific product from the user's shopping cart.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The UUID of the product to remove from the cart
 *     responses:
 *       200:
 *         description: Product removed from cart successfully.
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
 *                     message:
 *                       type: string
 *                       example: Product removed from cart successfully
 *       400:
 *         description: Invalid product ID.
 *       404:
 *         description: Product not found in cart.
 *       500:
 *         description: Internal server error.
 */
CartRouter.delete(
  "/:productId",
  mapParam("productId", "id"),
  validate(UuidParamSchema),
  limiter(timeConstant.ONE_SECOND, 3, true),
  catchHandler(cartController.removeProductFromCart.bind(cartController)),
);
