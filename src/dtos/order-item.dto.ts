export class OrderItemDto {
  id!: string;
  orderId!: string;
  productId!: string;
  quantity!: number;
  priceCents!: number;
  variantId?: string;
}
