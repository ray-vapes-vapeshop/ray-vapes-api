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
 *           example: "5d6f8a2c-1b7e-4f3a-9d8e-2c5a9b6f1e7d"
 *         orderId:
 *           type: string
 *           format: uuid
 *           description: id of the order this item belongs to
 *           example: "7e9f4a21-b3d8-4c70-a1e5-9c2f63b8f2e8"
 *         productId:
 *           type: string
 *           format: uuid
 *           description: id of the product ordered
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
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
 *           example: "3a4b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d"
 */
