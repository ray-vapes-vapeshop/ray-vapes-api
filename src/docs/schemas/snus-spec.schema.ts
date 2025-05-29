/**
 * @swagger
 * components:
 *   schemas:
 *     SnusSpec:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the snus specification
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         nicotineMg:
 *           type: number
 *           format: float
 *           description: Nicotine content in milligrams
 *           example: 8.0
 *         variants:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SnusVariant'
 */
