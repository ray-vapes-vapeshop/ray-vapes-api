/*
  Warnings:

  - Added the required column `order_method` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderMethod" AS ENUM ('PICKUP', 'DELIVERY', 'EXPRESS', 'PICKUP_POINT', 'COURIER_DELIVERY', 'POST_OFFICE_DELIVERY', 'INTERNATIONAL_DELIVERY');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "order_method" "OrderMethod" NOT NULL,
ADD COLUMN     "pickup_location" TEXT;
