/**
 * @swagger
 * components:
 *   schemas:
 *     CartItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the cart item
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         product:
 *           allOf:
 *             - $ref: '#/components/schemas/Product'
 *             - type: object
 *               description: The product details
 *         quantity:
 *           type: integer
 *           description: Quantity of the product in cart
 *           example: 2
 *         unitPrice:
 *           type: integer
 *           description: Price per unit of the product `in cents`
 *           example: 1250
 *         totalPrice:
 *           type: integer
 *           description: Total price for this item (quantity × unitPrice) `in cents`
 *           example: 2500
 *       required:
 *         - id
 *         - product
 *         - quantity
 *         - totalPrice
 */
