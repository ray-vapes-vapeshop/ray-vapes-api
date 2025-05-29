/**
 * @swagger
 * components:
 *   schemas:
 *     PriceTier:
 *       type: object
 *       properties:
 *         unit:
 *           type: string
 *           description: Unit of measurement for the price tier
 *           enum: [PIECE, PACK, BLOCK, CAN, BOTTLE]
 *           example: "PIECE"
 *         quantity:
 *           type: integer
 *           description: Quantity associated with the price tier
 *           nullable: true
 *           example: 10
 *         priceCents:
 *           type: integer
 *           description: Price in cents for the specified unit and quantity
 *           example: 2000
 */
