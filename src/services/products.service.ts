import { NotFound } from "http-errors";

import { ProductDto } from "../dtos/product.dto";
import { ProductsQueryDto } from "../dtos/products-query.dto";
import { ProductsRepository } from "../repositories/products.repository";
import { PageRequest } from "../utils/page-request.util";
import { PageResponse } from "../utils/page-response.util";
import errorConstant from "../constants/error.constant";

export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository = new ProductsRepository()) {}

  async getProducts(productsQuery: ProductsQueryDto) {
    const pageRequest = new PageRequest(productsQuery);

    const [products, count] = await Promise.all([
      await this.productsRepository.getProductsByFilter(productsQuery, pageRequest),
      await this.productsRepository.getCountProductsByFilter(productsQuery),
    ]);

    return new PageResponse<ProductDto>(pageRequest, products, count);
  }

  async getProductById(productId: string) {
    const product = await this.productsRepository.getProductById(productId);

    if (!product) {
      throw new NotFound(errorConstant.NOT_FOUND);
    }

    return product;
  }
}
