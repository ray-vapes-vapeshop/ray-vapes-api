/**
 * @swagger
 * components:
 *   schemas:
 *     LiquidSpec:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the liquid specification
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         bottleMl:
 *           type: integer
 *           description: Volume of the liquid in milliliters
 *           example: 100
 *         nicotinePct:
 *           type: number
 *           format: float
 *           nullable: true
 *           description: Nicotine percentage in the liquid, can be null
 *           example: 5.0
 *         variants:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/LiquidVariant'
 */
