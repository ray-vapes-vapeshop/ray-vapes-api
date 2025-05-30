/**
 * @swagger
 * components:
 *   schemas:
 *     UserBillingInfo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "9bc7f64a-3184-42e6-8c29-d87e012a5fb2"
 *         firstName:
 *           type: string
 *           example: "John"
 *         lastName:
 *           type: string
 *           example: "Doe"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-05-01T12:30:45Z"
 *         plan:
 *           type: string
 *           enum: [BASIC]
 *           example: "BASIC"
 *         frequency:
 *           type: string
 *           enum: [MONTHLY, YEARLY]
 *           example: "MONTHLY"
 *         totalAmountBilled:
 *           type: number
 *           example: 129.99
 *         status:
 *           type: string
 *           enum: [PAID, PAST_DUE]
 *           example: "PAID"
 */
export class ProductResponseDto {
  id!: string;
}
