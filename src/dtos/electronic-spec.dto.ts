import { ChargingType, FlavourMode } from "@prisma/client";
import { ElectronicVariantDto } from "./electronic-variant.dto";

export class ElectronicSpecDto {
  id!: string;
  puffs!: number;
  nicotinePct!: number;
  chargingType!: ChargingType;
  flavourMode!: FlavourMode;
  variants!: ElectronicVariantDto[];
}
