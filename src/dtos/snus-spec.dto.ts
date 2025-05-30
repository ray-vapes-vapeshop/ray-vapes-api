import { SnusVariantDto } from "./snus-variant.dto";

export class SnusSpecDto {
  id!: string;
  nicotineMg!: number;
  variants!: SnusVariantDto[];
}
