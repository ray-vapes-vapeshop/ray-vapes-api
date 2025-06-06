import { OrderStatus } from "@prisma/client";
import { OrdersQueryDto } from "../dtos/orders-query.dto";
import { OrdersQueryType } from "../types/orders-query.type";

export const mapOrdersQueryToDto = (ordersQuery: OrdersQueryType): OrdersQueryDto => {
  return {
    currentPage: ordersQuery.currentPage,
    pageSize: ordersQuery.pageSize,
    sortBy: ordersQuery.sortBy,
    search: ordersQuery.search ?? undefined,
    location: ordersQuery.location ?? undefined,
    orderStatus: (ordersQuery.orderStatus as OrderStatus) ?? undefined,
    minPriceCents: ordersQuery.minPriceCents ?? undefined,
    maxPriceCents: ordersQuery.maxPriceCents ?? undefined,
    dateFrom: ordersQuery.dateFrom ? new Date(ordersQuery.dateFrom) : undefined,
    dateTo: ordersQuery.dateTo ? new Date(ordersQuery.dateTo) : undefined,
  };
};
