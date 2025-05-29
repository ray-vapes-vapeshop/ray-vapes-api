/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the product
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         name:
 *           type: string
 *           description: Name of the product
 *           example: "ELF BAR BC4000 Red Mojito"
 *         type:
 *           type: string
 *           description: Type of the product
 *           enum: [ELECTRONIC_CIGARETTE, CIGARETTE, SNUS, LIQUID]
 *           example: "ELECTRONIC_CIGARETTE"
 *         description:
 *           type: string
 *           description: Detailed description of the product
 *           nullable: true
 *           example: "Red Mojito is a unique combination of classic mojito with a bright taste of red berries"
 *         imageUrl:
 *           type: string
 *           format: uri
 *           description: URL of the product image
 *           nullable: true
 *           example: "https://ray-vapes/products/elfbar-bc4000-red-mojito.jpg"
 *         isBestseller:
 *           type: boolean
 *           description: Indicates if the product is a bestseller
 *           example: true
 *         priceTiers:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PriceTier'
 *         stockItems:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/StockItem'
 *         electronicSpec:
 *           $ref: '#/components/schemas/ElectronicSpec'
 *           nullable: true
 *         liquidSpec:
 *           $ref: '#/components/schemas/LiquidSpec'
 *           nullable: true
 *         snusSpec:
 *           $ref: '#/components/schemas/SnusSpec'
 *           nullable: true
 */
