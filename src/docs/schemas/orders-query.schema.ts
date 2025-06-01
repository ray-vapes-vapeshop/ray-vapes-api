/**
 * @swagger
 * components:
 *   schemas:
 *     OrdersQuery:
 *       allOf:
 *         - $ref: '#/components/schemas/PageQuery'
 *         - type: object
 *           properties:
 *             search:
 *               type: string
 *               description: Search orders optionally by name, telegram nickname, email, or phone
 *               example: "John @smoker228"
 *             orderStatus:
 *               type: string
 *               enum: [PENDING, PAID, SHIPPING, DELIVERED, CANCELLED]
 *               description: Status of the order
 *               example: "PAID"
 *             minPriceCents:
 *               type: integer
 *               description: Minimum price in cents
 *               example: 1000
 *             maxPriceCents:
 *               type: integer
 *               description: Maximum price in cents
 *               example: 10000
 *             dateFrom:
 *               type: string
 *               format: date
 *               description: Start date for filtering orders
 *               example: "2025-05-10"
 *             dateTo:
 *               type: string
 *               format: date
 *               description: End date for filtering orders
 *               example: "2025-05-31"
 *   parameters:
 *     search:
 *       in: query
 *       name: search
 *       schema:
 *         type: string
 *       description: Search orders optionally by `name`, `telegram nick`, `email`, or `phone`
 *       example: "John @smoker228"
 *     orderStatus:
 *       in: query
 *       name: orderStatus
 *       schema:
 *         type: string
 *         enum: [PENDING, PAID, SHIPPING, DELIVERED, CANCELLED]
 *       description: Status of the order
 *       example: "PAID"
 *     minPriceCents:
 *       in: query
 *       name: minPriceCents
 *       schema:
 *         type: integer
 *       description: Minimum price in cents
 *       example: 1000
 *     maxPriceCents:
 *       in: query
 *       name: maxPriceCents
 *       schema:
 *         type: integer
 *       description: Maximum price in cents
 *       example: 10000
 *     dateFrom:
 *       in: query
 *       name: dateFrom
 *       schema:
 *         type: string
 *         format: date
 *       description: Start date for filtering orders
 *       example: "2025-01-01"
 *     dateTo:
 *       in: query
 *       name: dateTo
 *       schema:
 *         type: string
 *         format: date
 *       description: End date for filtering orders
 *       example: "2025-05-31"
 *   x-user-parameters:
 *     - $ref: '#/components/parameters/currentPage'
 *     - $ref: '#/components/parameters/pageSize'
 *     - $ref: '#/components/parameters/sortBy'
 *     - $ref: '#/components/parameters/search'
 *     - $ref: '#/components/parameters/orderStatus'
 *     - $ref: '#/components/parameters/minPriceCents'
 *     - $ref: '#/components/parameters/maxPriceCents'
 *     - $ref: '#/components/parameters/dateFrom'
 *     - $ref: '#/components/parameters/dateTo'
 */
