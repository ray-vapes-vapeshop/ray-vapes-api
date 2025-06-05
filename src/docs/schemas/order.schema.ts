/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the order
 *           example: "7e9f4a21-b3d8-4c70-a1e5-9c2f63b8f2e8"
 *         firstName:
 *           type: string
 *           description: First name of the customer
 *           example: "John"
 *         lastName:
 *           type: string
 *           description: Last name of the customer
 *           example: "Doe"
 *         address:
 *           type: string
 *           description: Delivery address
 *           example: "123 Main St, City, Country"
 *         email:
 *           type: string
 *           format: email
 *           description: Customer email address
 *           example: "john.doe@example.com"
 *         telegramNickname:
 *           type: string
 *           description: Customer's Telegram nickname
 *           example: "@johndoe"
 *         priceCents:
 *           type: integer
 *           description: Total price in cents
 *           example: 3500
 *         orderStatus:
 *           type: string
 *           description: Current status of the order
 *           enum: [PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED]
 *           example: "CONFIRMED"
 *         orderMethod:
 *           type: string
 *           description: Method of order fulfillment
 *           enum: [DELIVERY, PICKUP]
 *           example: "DELIVERY"
 *         pickupLocation:
 *           type: string
 *           description: Location for pickup if applicable
 *           nullable: true
 *           example: "Store #5, Shopping Mall"
 *         phoneNumber:
 *           type: string
 *           description: Customer's phone number
 *           nullable: true
 *           example: "+1234567890"
 *         deliveryNotes:
 *           type: string
 *           description: Additional notes for delivery
 *           nullable: true
 *           example: "Please leave at the front door"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the order was created
 *           example: "2023-06-05T14:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the order was last updated
 *           example: "2023-06-05T15:45:00Z"
 *         items:
 *           type: array
 *           description: List of items in the order
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 */
