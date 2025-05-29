import { Request, Response } from "express";

import { ProductsService } from "../services/products.service";
import { ProductsQueryDto } from "../dtos/products-query.dto";
import { SuccessResponseDto } from "../dtos/success-response.dto";
import { ProductsQuerySchema } from "../validators/products-query.validator";

export class ProductsController {
  constructor(private readonly productsService: ProductsService = new ProductsService()) {}

  async getProducts(req: Request, res: Response) {
    const productsQuery: ProductsQueryDto = ProductsQuerySchema.parse(req.query);

    const products = await this.productsService.getProducts(productsQuery);

    res.json(new SuccessResponseDto(products));
  }
}
