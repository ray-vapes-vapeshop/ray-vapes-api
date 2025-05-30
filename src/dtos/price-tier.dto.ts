import { Unit } from "@prisma/client";

export class PriceTierDto {
  unit!: Unit;
  quantity?: number | null;
  priceCents!: number;
}
