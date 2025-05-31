/**
 * @swagger
 * components:
 *   schemas:
 *     AddToCart:
 *       type: object
 *       required:
 *         - productId
 *       properties:
 *         productId:
 *           type: string
 *           format: uuid
 *           description: ID of the product to add to cart
 *           example: "product_uuid"
 *         quantity:
 *           type: integer
 *           description: Quantity of the product to add (defaults to 1 if not provided)
 *           default: 1
 *           example: 1
 *   requestBodies:
 *     AddToCartRequest:
 *       description: Request body for adding a product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddToCart'
 */
