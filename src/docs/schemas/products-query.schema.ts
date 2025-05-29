/**
 * @swagger
 * components:
 *   schemas:
 *     ProductsQuery:
 *       allOf:
 *         - $ref: '#/components/schemas/PageQuery'
 *         - type: object
 *           properties:
 *             type:
 *               type: string
 *               enum: [ELECTRONIC_CIGARETTE, CIGARETTE, SNUS, LIQUID]
 *               description: Product type
 *               example: "ELECTRONIC_CIGARETTE"
 *             isBestseller:
 *               type: boolean
 *               description: Whether the product is a bestseller
 *               example: true
 *   parameters:
 *     type:
 *       in: query
 *       name: type
 *       schema:
 *         type: string
 *         enum: [ELECTRONIC_CIGARETTE, CIGARETTE, SNUS, LIQUID]
 *       description: Product type
 *       example: "ELECTRONIC_CIGARETTE"
 *     isBestseller:
 *       in: query
 *       name: isBestseller
 *       schema:
 *         type: boolean
 *       description: Whether the product is a bestseller
 *       example: false
 *   x-user-parameters:
 *     - $ref: '#/components/parameters/currentPage'
 *     - $ref: '#/components/parameters/pageSize'
 *     - $ref: '#/components/parameters/sortBy'
 *     - $ref: '#/components/parameters/type'
 *     - $ref: '#/components/parameters/isBestseller'
 */
