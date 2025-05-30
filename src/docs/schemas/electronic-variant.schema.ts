/**
 * @swagger
 * components:
 *   schemas:
 *     ElectronicVariant:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the electronic variant
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         flavour:
 *           $ref: '#/components/schemas/Flavour'
 *         priceCents:
 *           type: integer
 *           description: Price in cents
 *           example: 2000
 *         stock:
 *           type: integer
 *           description: Available stock quantity
 *           example: 150
 */
