import { OrderStatus } from "@prisma/client";

export class OrdersQueryDto {
  currentPage!: number;
  pageSize!: number;
  sortBy!: Record<string, "asc" | "desc">;
  search?: string | undefined;
  location?: string | undefined;
  orderStatus?: OrderStatus | undefined;
  minPriceCents?: number | undefined;
  maxPriceCents?: number | undefined;
  dateFrom?: Date | undefined;
  dateTo?: Date | undefined;
}
