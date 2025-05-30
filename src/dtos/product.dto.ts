import { ProductType } from "@prisma/client";
import { PriceTierDto } from "./price-tier.dto";
import { StockItemDto } from "./stock-item.dto";
import { ElectronicSpecDto } from "./electronic-spec.dto";
import { LiquidSpecDto } from "./liquid-spec.dto";
import { SnusSpecDto } from "./snus-spec.dto";

export class ProductDto {
  id!: string;
  name!: string;
  type!: ProductType;
  description?: string | null;
  imageUrl?: string | null;
  isBestseller!: boolean;
  priceTiers!: PriceTierDto[];
  stockItems!: StockItemDto[];
  electronicSpec?: ElectronicSpecDto | null;
  liquidSpec?: LiquidSpecDto | null;
  snusSpec?: SnusSpecDto | null;
}
