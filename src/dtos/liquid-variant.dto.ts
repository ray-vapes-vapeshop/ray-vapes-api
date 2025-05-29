import { FlavourDto } from "./flavour.dto";

export class LiquidVariantDto {
  id!: string;
  flavour!: FlavourDto;
  priceCents!: number;
  stock!: number;
}
