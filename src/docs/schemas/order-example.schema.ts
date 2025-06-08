/**
 * @swagger
 * components:
 *   schemas:
 *     OrderExample:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the order
 *           example: "34fa41b3-359f-4ca8-8402-397c61f3a129"
 *         firstName:
 *           type: string
 *           description: Customer's first name
 *           example: "John"
 *         lastName:
 *           type: string
 *           description: Customer's last name
 *           example: "Doe"
 *         address:
 *           type: string
 *           description: Delivery address
 *           example: "123 Main St, City, Country"
 *         email:
 *           type: string
 *           format: email
 *           description: Customer's email address
 *           example: "john.doe@example.com"
 *         telegramNickname:
 *           type: string
 *           description: Customer's Telegram username
 *           example: "@johndoe"
 *         priceCents:
 *           type: integer
 *           description: Total order price in cents
 *           example: 1500
 *         orderStatus:
 *           type: string
 *           enum: [PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED]
 *           description: Current status of the order
 *           example: "PENDING"
 *         orderMethod:
 *           type: string
 *           enum: [DELIVERY, PICKUP]
 *           description: Method of order fulfillment
 *           example: "DELIVERY"
 *         pickupLocation:
 *           type: string
 *           description: Location for order pickup (if applicable)
 *           example: "Store #5, Shopping Mall"
 *         phoneNumber:
 *           type: string
 *           description: Customer's contact phone number
 *           example: "+1234567890"
 *         deliveryNotes:
 *           type: string
 *           description: Additional notes for delivery
 *           example: "Please leave at the front door"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was created
 *           example: "2025-06-06T13:42:25.254Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the order was last updated
 *           example: "2025-06-06T13:42:25.254Z"
 *         items:
 *           type: array
 *           description: List of items in the order
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 format: uuid
 *                 description: Unique identifier for the order item
 *                 example: "bb364799-3341-4c5a-a544-e478c8114ac6"
 *               orderId:
 *                 type: string
 *                 format: uuid
 *                 description: Reference to the parent order
 *                 example: "34fa41b3-359f-4ca8-8402-397c61f3a129"
 *               productId:
 *                 type: string
 *                 format: uuid
 *                 description: Reference to the product
 *                 example: "077cc301-089b-4de5-bf73-5c7d50f64016"
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the product ordered
 *                 example: 2
 *               priceCents:
 *                 type: integer
 *                 description: Price per unit in cents
 *                 example: 1500
 *               variantId:
 *                 type: string
 *                 format: uuid
 *                 description: Reference to the product variant
 *                 example: "edb05187-4caa-4dfb-a89d-3896ee18288a"
 *               product:
 *                 type: object
 *                 description: Product details
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Product name
 *                     example: "ZOOY Vape"
 *                   type:
 *                     type: string
 *                     description: Product type
 *                     example: "ELECTRONIC_CIGARETTE"
 *                   variant:
 *                     type: object
 *                     description: Product variant details
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: Variant identifier
 *                         example: "edb05187-4caa-4dfb-a89d-3896ee18288a"
 *                       flavour:
 *                         type: object
 *                         description: Flavour details
 *                         properties:
 *                           id:
 *                             type: string
 *                             format: uuid
 *                             description: Flavour identifier
 *                             example: "1b8a2f59-8bee-439d-9c38-80ba82872ade"
 *                           name:
 *                             type: string
 *                             description: Flavour name
 *                             example: "Strawberry, banana & Grape, mint"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             description: Timestamp when the flavour was created
 *                             example: "2025-05-31T18:30:49.202Z"
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             description: Timestamp when the flavour was last updated
 *                             example: "2025-05-31T18:30:49.202Z"
 *       required:
 *         - id
 *         - firstName
 *         - lastName
 *         - email
 *         - priceCents
 *         - orderStatus
 *         - orderMethod
 *         - createdAt
 *         - updatedAt
 *         - items
 */
