-- CreateTable
CREATE TABLE "snus_specs" (
    "id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "nicotine_mg" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "snus_specs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "snus_variants" (
    "id" UUID NOT NULL,
    "spec_id" UUID NOT NULL,
    "flavour_id" UUID NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "snus_variants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "snus_specs_product_id_idx" ON "snus_specs"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "snus_specs_product_id_key" ON "snus_specs"("product_id");

-- AddForeignKey
ALTER TABLE "snus_specs" ADD CONSTRAINT "snus_specs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "snus_variants" ADD CONSTRAINT "snus_variants_spec_id_fkey" FOREIGN KEY ("spec_id") REFERENCES "snus_specs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "snus_variants" ADD CONSTRAINT "snus_variants_flavour_id_fkey" FOREIGN KEY ("flavour_id") REFERENCES "flavours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
