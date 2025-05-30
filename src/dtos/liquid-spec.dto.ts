import { LiquidVariantDto } from "./liquid-variant.dto";

/**
 * @swagger
 * components:
 *   schemas:
 *     LiquidSpec:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         bottleMl:
 *           type: integer
 *         nicotinePct:
 *           type: number
 *           format: float
 *           nullable: true
 *         variants:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/LiquidVariant'
 */
export class LiquidSpecDto {
  id!: string;
  bottleMl!: number;
  nicotinePct?: number | null;
  variants!: LiquidVariantDto[];
}
