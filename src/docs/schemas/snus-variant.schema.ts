/**
 * @swagger
 * components:
 *   schemas:
 *     SnusVariant:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the snus variant
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         flavour:
 *           $ref: '#/components/schemas/Flavour'
 *         priceCents:
 *           type: integer
 *           description: Price of the snus variant in cents
 *           example: 2000
 *         stock:
 *           type: integer
 *           description: Stock quantity of the snus variant
 *           example: 100
 */
