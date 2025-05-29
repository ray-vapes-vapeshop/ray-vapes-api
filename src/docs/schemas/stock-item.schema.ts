/**
 * @swagger
 * components:
 *   schemas:
 *     StockItem:
 *       type: object
 *       properties:
 *         unit:
 *           type: string
 *           description: Unit of measurement for the stock item
 *           enum: [PIECE, PACK, BLOCK, CAN, BOTTLE]
 *           example: "PIECE"
 *         quantity:
 *           type: integer
 *           description: Quantity of the stock item available
 *           example: 100
 */
