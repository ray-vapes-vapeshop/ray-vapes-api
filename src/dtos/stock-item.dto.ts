import { Unit } from "@prisma/client";

export class StockItemDto {
  unit!: Unit;
  quantity!: number;
}
