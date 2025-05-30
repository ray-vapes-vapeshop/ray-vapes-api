import { Prisma, ProductType } from "@prisma/client";

export class ProductsFilterBuilder {
  private conditions: Prisma.ProductWhereInput[] = [];

  typeFilter(type?: ProductType) {
    if (type) {
      this.conditions.push({
        type: {
          equals: type,
        },
      });
    }

    return this;
  }

  isBestsellerFilter(isBestseller?: boolean) {
    if (isBestseller !== undefined) {
      this.conditions.push({
        isBestseller: {
          equals: isBestseller,
        },
      });
    }

    return this;
  }

  build(): Prisma.ProductWhereInput {
    return this.conditions.length > 0 ? { AND: this.conditions } : {};
  }
}
