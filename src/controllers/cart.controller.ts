import { Request, Response } from "express";

import { CartService } from "../services/cart.service";

export class CartController {
  constructor(private readonly cartService: CartService = new CartService()) {}

  async getCartContents(req: Request, res: Response) {
    console.log(
      `request: ${req.method}, response: ${res.statusCode}, service: ${this.cartService}`,
    );
  }

  async addToCart(req: Request, res: Response) {
    console.log(`request: ${req.method}, response: ${res.statusCode}`);
  }

  async updateCart(req: Request, res: Response) {
    console.log(`request: ${req.method}, response: ${res.statusCode}`);
  }

  async removeAllFromCart(req: Request, res: Response) {
    console.log(`request: ${req.method}, response: ${res.statusCode}`);
  }

  async removeProductFromCart(req: Request, res: Response) {
    console.log(`request: ${req.method}, response: ${res.statusCode}`);
  }
}
