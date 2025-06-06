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
 *               description: Search orders optionally by `first-last name`, `telegram nickname`, `email`, `phone`
 *               example: "John @smoker228"
 *             location:
 *               type: string
 *               description: Search orders by address pickup location
 *               example: "Smoker St 12, Rotterdam"
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
 *               format: date-time
 *               description: Start date and time for filtering orders
 *               example: "2025-05-10T10:30:00Z"
 *             dateTo:
 *               type: string
 *               format: date-time
 *               description: End date and time for filtering orders
 *               example: "2025-05-31T23:59:59Z"
 *   parameters:
 *     search:
 *       in: query
 *       name: search
 *       schema:
 *         type: string
 *       description: Search orders optionally by `first-last name`, `telegram nickname`, `email`, `phone`
 *       example: "John @smoker228"
 *     location:
 *       in: query
 *       name: location
 *       schema:
 *         type: string
 *       description: Search orders by `address` or `pickup location`
 *       example: "Smoker St 12, Rotterdam"
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
 *         format: date-time
 *       description: Start date and time for filtering orders
 *       example: "2025-01-01T00:00:00Z"
 *     dateTo:
 *       in: query
 *       name: dateTo
 *       schema:
 *         type: string
 *         format: date-time
 *       description: End date and time for filtering orders
 *       example: "2025-05-31T23:59:59Z"
 *   x-user-parameters:
 *     - $ref: '#/components/parameters/currentPage'
 *     - $ref: '#/components/parameters/pageSize'
 *     - $ref: '#/components/parameters/sortBy'
 *     - $ref: '#/components/parameters/name'
 *     - $ref: '#/components/parameters/email'
 *     - $ref: '#/components/parameters/address'
 *     - $ref: '#/components/parameters/pickupLocation'
 *     - $ref: '#/components/parameters/orderStatus'
 *     - $ref: '#/components/parameters/minPriceCents'
 *     - $ref: '#/components/parameters/maxPriceCents'
 *     - $ref: '#/components/parameters/dateFrom'
 *     - $ref: '#/components/parameters/dateTo'
 */
