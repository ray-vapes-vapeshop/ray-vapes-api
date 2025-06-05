import { prisma } from "../../prisma/client";
import { ProductsQueryDto } from "../dtos/products-query.dto";
import { PageRequest } from "../utils/page-request.util";
import { ProductsFilterBuilder } from "../utils/products-filter-builder.util";

export class ProductsRepository {
  private readonly productsRepository = prisma.product;

  async getProductsByFilter(query: ProductsQueryDto, pageRequest: PageRequest) {
    const where = this.productsSearchFilter(query);

    return await this.productsRepository.findMany({
      where,
      ...pageRequest.getFilter(),
      include: {
        priceTiers: true,
        stockItems: true,
        electronicSpec: {
          include: {
            variants: {
              include: {
                flavour: true,
              },
            },
          },
        },
        liquidSpec: {
          include: {
            variants: {
              include: {
                flavour: true,
              },
            },
          },
        },
        snusSpec: {
          include: {
            variants: {
              include: {
                flavour: true,
              },
            },
          },
        },
      },
    });
  }

  async getCountProductsByFilter(query: ProductsQueryDto) {
    const where = this.productsSearchFilter(query);
    return await this.productsRepository.count({ where });
  }

  async getProductWithRelationsById(productId: string) {
    return await this.productsRepository.findUnique({
      where: { id: productId },
      include: {
        priceTiers: true,
        stockItems: true,
        electronicSpec: {
          include: {
            variants: {
              include: {
                flavour: true,
              },
            },
          },
        },
        liquidSpec: {
          include: {
            variants: {
              include: {
                flavour: true,
              },
            },
          },
        },
        snusSpec: {
          include: {
            variants: {
              include: {
                flavour: true,
              },
            },
          },
        },
      },
    });
  }

  async getProductById(productId: string) {
    return await this.productsRepository.findUnique({
      where: { id: productId },
    });
  }

  private productsSearchFilter(query: Partial<ProductsQueryDto>) {
    return new ProductsFilterBuilder()
      .typeFilter(query.type)
      .isBestsellerFilter(query.isBestseller)
      .build();
  }
}
