/**
 * @swagger
 * components:
 *   schemas:
 *     LiquidVariant:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the liquid variant
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         flavour:
 *           $ref: '#/components/schemas/Flavour'
 *         priceCents:
 *           type: integer
 *           description: Price of the liquid variant in cents
 *           example: 1500
 *         stock:
 *           type: integer
 *           description: Stock quantity of the liquid variant
 *           example: 200
 */
