/**
 * @swagger
 * components:
 *   schemas:
 *     ElectronicSpec:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the electronic device specification
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         puffs:
 *           type: integer
 *           description: Number of puffs the electronic device can deliver
 *           example: 5000
 *         nicotinePct:
 *           type: number
 *           description: Percentage of nicotine in the electronic device
 *           format: float
 *           example: 5.0
 *         chargingType:
 *           type: string
 *           description: Type of charging for the electronic device
 *           enum: [TYPE_C, MICRO_USB, NONE]
 *           example: "TYPE_C"
 *         flavourMode:
 *           type: string
 *           description: Mode of flavour delivery
 *           enum: [SINGLE, TWO_IN_ONE, THREE_IN_ONE]
 *           example: "SINGLE"
 *         variants:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ElectronicVariant'
 */
