/**
 * @swagger
 * components:
 *   schemas:
 *     CreateOrder:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - address
 *         - email
 *         - telegramNickname
 *         - orderMethod
 *         - items
 *       properties:
 *         firstName:
 *           $ref: '#/components/schemas/Order/properties/firstName'
 *         lastName:
 *           $ref: '#/components/schemas/Order/properties/lastName'
 *         address:
 *           $ref: '#/components/schemas/Order/properties/address'
 *         email:
 *           $ref: '#/components/schemas/Order/properties/email'
 *         telegramNickname:
 *           $ref: '#/components/schemas/Order/properties/telegramNickname'
 *         orderMethod:
 *           $ref: '#/components/schemas/Order/properties/orderMethod'
 *         pickupLocation:
 *           $ref: '#/components/schemas/Order/properties/pickupLocation'
 *         phoneNumber:
 *           $ref: '#/components/schemas/Order/properties/phoneNumber'
 *         deliveryNotes:
 *           $ref: '#/components/schemas/Order/properties/deliveryNotes'
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *               - priceCents
 *             properties:
 *               productId:
 *                 $ref: '#/components/schemas/OrderItem/properties/productId'
 *               quantity:
 *                 $ref: '#/components/schemas/OrderItem/properties/quantity'
 *               priceCents:
 *                 $ref: '#/components/schemas/OrderItem/properties/priceCents'
 *               variantId:
 *                 $ref: '#/components/schemas/OrderItem/properties/variantId'
 */
