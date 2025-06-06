import { OrderStatus, Prisma } from "@prisma/client";

export class OrdersFilterBuilder {
  private conditions: Prisma.OrderWhereInput[] = [];

  filerByMultipleFields(search?: string) {
    if (!search || search.trim() === "") return this;

    const searchTerms = search.trim().split(/\s+/).filter(Boolean);
    const orConditions: Prisma.OrderWhereInput[] = [];

    for (const term of searchTerms) {
      if (term.trim() !== "") {
        orConditions.push({ telegramNickname: { contains: term, mode: "insensitive" } });
        orConditions.push({ firstName: { contains: term, mode: "insensitive" } });
        orConditions.push({ lastName: { contains: term, mode: "insensitive" } });
        orConditions.push({ email: { contains: term, mode: "insensitive" } });
        orConditions.push({ phoneNumber: { contains: term, mode: "insensitive" } });
      }
    }

    if (orConditions.length > 0) {
      this.conditions.push({ OR: orConditions });
    }

    return this;
  }

  filerByLocation(location?: string) {
    if (!location || location.trim() === "") return this;

    const orConditions: Prisma.OrderWhereInput[] = [];

    orConditions.push({ address: { contains: location, mode: "insensitive" } });
    orConditions.push({ pickupLocation: { contains: location, mode: "insensitive" } });

    this.conditions.push({ OR: orConditions });
    return this;
  }

  orderStatusFilter(orderStatus?: OrderStatus) {
    if (orderStatus) {
      this.conditions.push({ orderStatus });
    }

    return this;
  }

  priceFilter(minPriceCents?: number, maxPriceCents?: number) {
    const filter: Prisma.OrderWhereInput = {};

    if (minPriceCents || maxPriceCents) {
      filter.priceCents = {};

      if (minPriceCents) {
        filter.priceCents = { ...filter.priceCents, gte: minPriceCents };
      }

      if (maxPriceCents) {
        filter.priceCents = { ...filter.priceCents, lte: maxPriceCents };
      }
    }

    if (Object.keys(filter).length > 0) {
      this.conditions.push(filter);
    }

    return this;
  }

  dateFilter(dateFrom?: Date, dateTo?: Date) {
    const dateFilter: Prisma.OrderWhereInput = { createdAt: {} };

    if (dateFrom || dateTo) {
      dateFilter.createdAt = {};

      if (dateFrom) {
        dateFilter.createdAt = {
          ...dateFilter.createdAt,
          gte: dateFrom,
        };
      }

      if (dateTo) {
        dateFilter.createdAt = {
          ...dateFilter.createdAt,
          lte: dateTo,
        };
      }

      this.conditions.push(dateFilter);
    }

    return this;
  }

  build(): Prisma.OrderWhereInput {
    return this.conditions.length > 0 ? { AND: this.conditions } : {};
  }
}
