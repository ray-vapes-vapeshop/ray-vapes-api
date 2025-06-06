/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the order item
 *           example: "order_item_id"
 *         orderId:
 *           type: string
 *           format: uuid
 *           description: id of the order this item belongs to
 *           example: "order_id"
 *         productId:
 *           type: string
 *           format: uuid
 *           description: id of the product ordered
 *           example: "product_id"
 *         quantity:
 *           type: integer
 *           description: Number of items ordered
 *           example: 2
 *         priceCents:
 *           type: integer
 *           description: Price per item in cents
 *           example: 1500
 *         variantId:
 *           type: string
 *           format: uuid
 *           description: id of the product variant if applicable
 *           nullable: true
 *           example: "variant_id"
 */
