-- CreateEnum
CREATE TYPE "ChargingType" AS ENUM ('TYPE_C', 'MICRO_USB', 'NONE');

-- CreateEnum
CREATE TYPE "FlavourMode" AS ENUM ('SINGLE', 'TWO_IN_ONE', 'THREE_IN_ONE');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('ELECTRONIC_CIGARETTE', 'CIGARETTE', 'SNUS', 'LIQUID');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('PIECE', 'PACK', 'BLOCK', 'CAN', 'BOTTLE');

-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "is_bestseller" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_tiers" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "unit" "Unit" NOT NULL,
    "quantity" INTEGER,
    "price_cents" INTEGER NOT NULL,

    CONSTRAINT "price_tiers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_items" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "unit" "Unit" NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "stock_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "electronic_specs" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "puffs" INTEGER NOT NULL,
    "nicotine_pct" DOUBLE PRECISION NOT NULL,
    "charging_type" "ChargingType" NOT NULL,
    "flavour_mode" "FlavourMode" NOT NULL,

    CONSTRAINT "electronic_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "electronic_variants" (
    "id" UUID NOT NULL,
    "spec_id" UUID NOT NULL,
    "flavour_id" UUID NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "electronic_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liquid_specs" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "bottle_ml" INTEGER NOT NULL,
    "nicotine_pct" DOUBLE PRECISION,

    CONSTRAINT "liquid_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "liquid_variants" (
    "id" UUID NOT NULL,
    "spec_id" UUID NOT NULL,
    "flavour_id" UUID NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "liquid_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flavours" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flavours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "price_tiers_product_id_idx" ON "price_tiers"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "price_tiers_product_id_unit_key" ON "price_tiers"("product_id", "unit");

-- CreateIndex
CREATE INDEX "stock_items_product_id_idx" ON "stock_items"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "stock_items_product_id_unit_key" ON "stock_items"("product_id", "unit");

-- CreateIndex
CREATE INDEX "electronic_specs_product_id_idx" ON "electronic_specs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "electronic_specs_product_id_key" ON "electronic_specs"("product_id");

-- CreateIndex
CREATE INDEX "liquid_specs_product_id_idx" ON "liquid_specs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "liquid_specs_product_id_key" ON "liquid_specs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "flavours_name_key" ON "flavours"("name");

-- CreateIndex
CREATE INDEX "flavours_name_idx" ON "flavours"("name");

-- AddForeignKey
ALTER TABLE "price_tiers" ADD CONSTRAINT "price_tiers_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stock_items" ADD CONSTRAINT "stock_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "electronic_specs" ADD CONSTRAINT "electronic_specs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "electronic_variants" ADD CONSTRAINT "electronic_variants_spec_id_fkey" FOREIGN KEY ("spec_id") REFERENCES "electronic_specs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "electronic_variants" ADD CONSTRAINT "electronic_variants_flavour_id_fkey" FOREIGN KEY ("flavour_id") REFERENCES "flavours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liquid_specs" ADD CONSTRAINT "liquid_specs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liquid_variants" ADD CONSTRAINT "liquid_variants_spec_id_fkey" FOREIGN KEY ("spec_id") REFERENCES "liquid_specs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "liquid_variants" ADD CONSTRAINT "liquid_variants_flavour_id_fkey" FOREIGN KEY ("flavour_id") REFERENCES "flavours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
