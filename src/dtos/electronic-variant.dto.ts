import { FlavourDto } from "./flavour.dto";

export class ElectronicVariantDto {
  id!: string;
  flavour!: FlavourDto;
  priceCents!: number;
  stock!: number;
}
