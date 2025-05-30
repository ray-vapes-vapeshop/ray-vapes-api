import { ProductDto } from "../dtos/product.dto";
import { ProductsQueryDto } from "../dtos/products-query.dto";
import { ProductsRepository } from "../repositories/products.repository";
import { PageRequest } from "../utils/page-request.util";
import { PageResponse } from "../utils/page-response.util";

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
}
