import { FlavourDto } from "./flavour.dto";

export class SnusVariantDto {
  id!: string;
  flavour!: FlavourDto;
  priceCents!: number;
  stock!: number;
}
