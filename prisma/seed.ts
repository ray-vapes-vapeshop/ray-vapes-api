import { ChargingType, FlavourMode, PrismaClient, ProductType, Unit } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    //#region Sigarettes seeding
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const winston = await prisma.product.create({
      data: {
        name: "Winston blue",
        type: ProductType.CIGARETTE,
        imageUrl:
          "https://hotboxcy.com/cdn/shop/files/FE262449-B058-4472-B464-1992D6907D45.png?v=1725396502",
        priceTiers: {
          createMany: {
            data: [
              { unit: Unit.PACK, priceCents: 600 },
              { unit: Unit.BLOCK, priceCents: 5000 },
            ],
          },
        },
        stockItems: {
          createMany: {
            data: [
              { unit: Unit.PACK, quantity: 100 },
              { unit: Unit.BLOCK, quantity: 20 },
            ],
          },
        },
      },
    });
    //#endregion

    //#region Electronic cigarettes seeding
    async function upsertFlavours(names: string[]) {
      const records = [];
      for (const name of names) {
        const flavour = await prisma.flavour.upsert({
          where: { name },
          update: {},
          create: { name },
        });
        records.push(flavour);
      }
      return records;
    }

    const flavoursElfBarRaya = [
      "Kiwi Pineapple Ice",
      "Grape Ice",
      "Peach Berry",
      "Grape Cherry",
      "Blueberry Raspberry",
    ];

    const flavoursVozolVista = [
      "Kiwi Passion Guava",
      "Strawberry Ice Cream",
      "Sour Apple Ice",
      "Cherry",
      "Strawberry Ice",
      "Cola Ice",
      "Apple Peach Ice",
      "Gummy Bear",
      "Blue Razz Ice",
      "Blueberry Watermelon",
      "Mixture Berries",
      "Grape Ice",
      "Mint Mojito",
    ];

    const flavoursElfBarIceKing = [
      "Ribena Lychee",
      "Banana Cake",
      "Blackberry Cranberry",
      "Kiwi Passion Fruit Guava",
      "Strawberry Watermelon",
      "Cherry Pomegranate Cranberry",
    ];

    const flavoursWaka = ["Blue Razz Blackberry", "Green Grape", "Cranberry Grape"];

    const flavoursElfBarCombo = [
      "Watermelon + Strawberry",
      "Apple + Juice Peach",
      "Lime + Pineapple",
      "Green Apple + Double Apple Shisha",
      "Green Grape + Grape",
      "Pink Lemonade + Grapefruit",
      "Peach Mango + Watermelon",
      "Crape + Mary Drink",
      "Blackcurrant Raspberry + Grape",
      "Blueberry Sour Raspberry + Cherry",
    ];

    const flavoursBangKing = ["Red bull-Strawberry Banana", "Watermelon-Blueberry Cherry"];

    const flavoursZOOYVape = [
      "Strawberry, banana & Grape, mint",
      "Redberry, cherry & Mixed berries",
      "Strawberry ice cream & Peach, Mango milkshake",
      "Love 66 & Cola ice",
      "Pineapple, coconut & Apple ice",
      "Blueberry ice & Triple melon",
      "Watermelon ice & Blue raspberry lemon",
    ];

    const flavoursTornadoTwoPercents = ["Strawberry Red bull", "Fizzy Cherry", "Mixed berry"];

    const flavoursTornadoFivePercents = [
      "Blueberry Raspberry",
      "Pink Lemonade",
      "Watermelon Ice",
      "Kiwi Passion Guava",
      "Blueberry Pomegranate",
    ];

    const flavoursVozolRave40k = [
      "Cherry Strawberry",
      "Strawberry Kiwi",
      "Blueberry Watermelon",
      "Peach Raspberry Lemonade",
      "Double Apple",
    ];

    const flavoursWaspeTriple60k = [
      "Blueberry Ice + Black Dragon Ice + Fizzy Cherry Ice",
      "Strawberry Raspberry Cherry + Love 666 + Cherry Candy Ice",
    ];

    const flavoursVozolShisha25k = [
      "Frozen Strawberry Kiwi",
      "Dragon Fruit Banana Cherry",
      "Cherry Ice",
      "Blueberry Watermelon",
    ];

    const elfBarRayaFlavours = await upsertFlavours(flavoursElfBarRaya);
    const vozolVistaFlavours = await upsertFlavours(flavoursVozolVista);
    const elfBarIceKingFlavours = await upsertFlavours(flavoursElfBarIceKing);
    const wakaFlavours = await upsertFlavours(flavoursWaka);
    const elfBarComboFlavours = await upsertFlavours(flavoursElfBarCombo);
    const bangKingFlavours = await upsertFlavours(flavoursBangKing);
    const zooyVapeFlavours = await upsertFlavours(flavoursZOOYVape);
    const tornadoTwoPctFlavours = await upsertFlavours(flavoursTornadoTwoPercents);
    const tornadoFivePctFlavours = await upsertFlavours(flavoursTornadoFivePercents);
    const vozolRave40kFlavours = await upsertFlavours(flavoursVozolRave40k);
    const waspeTriple60kFlavours = await upsertFlavours(flavoursWaspeTriple60k);
    const vozolShisha25kFlavours = await upsertFlavours(flavoursVozolShisha25k);

    async function createElectronicProduct({
      name,
      imageUrl,
      puffs,
      nicotinePct,
      chargingType,
      flavourMode,
      priceEuro,
      flavours,
    }: {
      name: string;
      imageUrl: string;
      puffs: number;
      nicotinePct: number;
      chargingType: ChargingType;
      flavourMode: FlavourMode;
      priceEuro: number;
      flavours: typeof elfBarRayaFlavours;
    }) {
      const priceCents = Math.round(priceEuro * 100);

      const product = await prisma.product.create({
        data: {
          name,
          type: ProductType.ELECTRONIC_CIGARETTE,
          imageUrl,
          electronicSpec: {
            create: {
              puffs,
              nicotinePct,
              chargingType,
              flavourMode,
              variants: {
                create: flavours.map((f) => ({
                  flavourId: f.id,
                  priceCents,
                  stock: 100,
                })),
              },
            },
          },
          priceTiers: {
            createMany: {
              data: [{ unit: Unit.PIECE, priceCents }],
            },
          },
          stockItems: {
            createMany: {
              data: [{ unit: Unit.PIECE, quantity: 100 }],
            },
          },
        },
      });
      return product;
    }

    await createElectronicProduct({
      name: "ElfBar Raya d3 25k",
      imageUrl:
        "https://tabakevich.net/media/catalog/product/e/l/elektronnaya-sigareta-elf-bar-raya-d3-25000-vimto-fruktovo-yagodniy-napitok.jpg",
      puffs: 25000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.SINGLE,
      priceEuro: 28,
      flavours: elfBarRayaFlavours,
    });

    await createElectronicProduct({
      name: "Vozol vista 20k",
      imageUrl:
        "https://cdn.smoketime.com.ua/products/posters/vozol-vista-20000-vzbull-kholodniy-energetik.jpg",
      puffs: 20000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.SINGLE,
      priceEuro: 25,
      flavours: vozolVistaFlavours,
    });

    await createElectronicProduct({
      name: "ElfBar Ice King 30k",
      imageUrl:
        "https://sigara.kiev.ua/uploads/data/odnorazki/Elf-Bar/elf-bar-ice-king-40000/elf-bar-ice-king-30000-blue-razz-ice.webp",
      puffs: 30000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.SINGLE,
      priceEuro: 32,
      flavours: elfBarIceKingFlavours,
    });

    await createElectronicProduct({
      name: "Waka 20k",
      imageUrl: "https://thevapesite.com/cdn/shop/files/Image_20240718121730.png?v=1721332526",
      puffs: 20000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.SINGLE,
      priceEuro: 22,
      flavours: wakaFlavours,
    });

    await createElectronicProduct({
      name: "ElfBar Combo 25k",
      imageUrl:
        "https://mypodseurope.com/assets/uploads/product_small/elf-bar-combo-lime-pineapple.webp",
      puffs: 25000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.TWO_IN_ONE,
      priceEuro: 27,
      flavours: elfBarComboFlavours,
    });

    await createElectronicProduct({
      name: "Bang King",
      imageUrl: "https://luckvapes.com/wp-content/uploads/2025/03/bang-king-50k-4-600x600.jpg",
      puffs: 50000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.TWO_IN_ONE,
      priceEuro: 35,
      flavours: bangKingFlavours,
    });

    await createElectronicProduct({
      name: "ZOOY Vape",
      imageUrl:
        "https://www.vapeswholesaler.com/wp-content/uploads/2024/11/Wholesale-ZOOY-30000-Puffs-Double-Flavors-Disposable-Vape-Redberry-Cherry-Mixed-Berries.webp",
      puffs: 30000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.TWO_IN_ONE,
      priceEuro: 20,
      flavours: zooyVapeFlavours,
    });

    await createElectronicProduct({
      name: "Tornado 2%",
      imageUrl: "https://ua.allbarvape.com/uploads/37317/puff-randm-tornado-1500083cac.jpg",
      puffs: 15000,
      nicotinePct: 2,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.TWO_IN_ONE,
      priceEuro: 17,
      flavours: tornadoTwoPctFlavours,
    });

    await createElectronicProduct({
      name: "Tornado 5%",
      imageUrl: "https://www.eazyvapes.co.uk/cdn/shop/files/cherry_15k_fumot_randm_tornado_15k.jpg",
      puffs: 15000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.TWO_IN_ONE,
      priceEuro: 17,
      flavours: tornadoFivePctFlavours,
    });

    await createElectronicProduct({
      name: "Vozol Rave 40k",
      imageUrl: "https://vapepenb2b.com/cdn/shop/files/VOZOLRave40000-2.jpg",
      puffs: 40000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.SINGLE,
      priceEuro: 30,
      flavours: vozolRave40kFlavours,
    });

    await createElectronicProduct({
      name: "Waspe Triple 60k",
      imageUrl: "https://vapepenb2b.com/cdn/shop/files/WASPE__3_in_1_60000_puffs_8.jpg",
      puffs: 60000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.THREE_IN_ONE,
      priceEuro: 45,
      flavours: waspeTriple60kFlavours,
    });

    await createElectronicProduct({
      name: "Vozol Shisha 25k",
      imageUrl: "https://www.vapehouseuk.com/cdn/shop/files/vozol-25000.jpg",
      puffs: 25000,
      nicotinePct: 5,
      chargingType: ChargingType.TYPE_C,
      flavourMode: FlavourMode.SINGLE,
      priceEuro: 27,
      flavours: vozolShisha25kFlavours,
    });
    //#endregion

    //#region Snus seeding
    async function upsertSnusFlavours(names: string[]) {
      const records = [];
      for (const name of names) {
        const flavour = await prisma.flavour.upsert({
          where: { name },
          update: {},
          create: { name },
        });
        records.push(flavour);
      }
      return records;
    }

    const flavoursIceberg150MgCaffeine = ["Watermelon mint", "Arsaka", "Sweet mint"];
    const iceberg150MgCaffeineFlavours = await upsertSnusFlavours(flavoursIceberg150MgCaffeine);

    async function createSimpleSnusProduct({
      name,
      priceEuro,
      stock,
      nicotineMg,
      imageUrl,
    }: {
      name: string;
      priceEuro: number;
      stock: number;
      nicotineMg: number;
      imageUrl?: string;
    }) {
      const priceCents = Math.round(priceEuro * 100);

      return await prisma.product.create({
        data: {
          name,
          type: ProductType.SNUS,
          imageUrl: imageUrl ?? null,
          priceTiers: {
            createMany: {
              data: [{ unit: Unit.PACK, priceCents }],
            },
          },
          stockItems: {
            createMany: {
              data: [{ unit: Unit.PACK, quantity: stock }],
            },
          },
          snusSpec: {
            create: {
              nicotineMg,
            },
          },
        },
      });
    }

    async function createSnusWithFlavours({
      name,
      priceEuro,
      nicotineMg,
      flavours,
      stock,
      imageUrl,
    }: {
      name: string;
      priceEuro: number;
      nicotineMg: number;
      flavours: typeof iceberg150MgCaffeineFlavours;
      stock: number;
      imageUrl?: string;
    }) {
      const priceCents = Math.round(priceEuro * 100);

      return await prisma.product.create({
        data: {
          name,
          type: ProductType.SNUS,
          imageUrl: imageUrl ?? null,
          priceTiers: {
            createMany: {
              data: [{ unit: Unit.PACK, priceCents }],
            },
          },
          stockItems: {
            createMany: {
              data: [{ unit: Unit.PACK, quantity: stock * flavours.length }],
            },
          },
          snusSpec: {
            create: {
              nicotineMg,
              variants: {
                create: flavours.map((flavour) => ({
                  flavourId: flavour.id,
                  priceCents,
                  stock,
                })),
              },
            },
          },
        },
      });
    }

    await createSimpleSnusProduct({
      name: "Iceberg apple pie 50 mg",
      priceEuro: 12,
      stock: 40,
      nicotineMg: 50,
      imageUrl: "https://europesnus.com/cdn/shop/files/KopiafIcebergMaxHitMixpack.png",
    });

    await createSimpleSnusProduct({
      name: "Iceberg 50 mg",
      priceEuro: 9,
      stock: 20,
      nicotineMg: 50,
      imageUrl:
        "https://thepodblock.co.uk/wp-content/uploads/2023/05/Iceberg_Ultra_Black_150mg_snus-nicotine-pouches-the-pod-block.jpg",
    });

    await createSimpleSnusProduct({
      name: "Pablo 50 mg",
      priceEuro: 10,
      stock: 20,
      nicotineMg: 50,
      imageUrl:
        "https://goodsnus.in.ua/files/resized/products/pablo-exclusive-strawberry-cheesecake-50-mg-g.700x800.jpg",
    });

    await createSnusWithFlavours({
      name: "Iceberg 150 mg caffeine",
      priceEuro: 5,
      nicotineMg: 150,
      flavours: iceberg150MgCaffeineFlavours,
      stock: 20,
      imageUrl: "https://nicopods.ie/wp-content/uploads/2023/08/Iceberg-Emerald-Snus.webp",
    });
    //#endregion

    //#region Liquid seeding
    async function upsertLiquidFlavours(names: string[]) {
      const records = [];
      for (const name of names) {
        const flavour = await prisma.flavour.upsert({
          where: { name },
          update: {},
          create: { name },
        });
        records.push(flavour);
      }
      return records;
    }

    const flavoursElfWorldELiquid = [
      "Kiwi Passion Guava",
      "Strawberry Ice Cream",
      "Sour Apple Ice",
      "Cherry",
      "Strawberry Ice",
      "Cola Ice",
      "Apple Peach Ice",
      "Gummy Bear",
      "Blue Razz Ice",
      "Blueberry Watermelon",
      "Mixture Berries",
      "Grape Ice",
      "Mint Mojito",
    ];

    const elfWorldELiquidFlavours = await upsertLiquidFlavours(flavoursElfWorldELiquid);

    async function createLiquidProduct({
      name,
      imageUrl,
      bottleMl,
      nicotinePct,
      priceEuro,
      flavours,
      stockQuantity,
    }: {
      name: string;
      imageUrl?: string;
      bottleMl: number;
      nicotinePct: number;
      priceEuro: number;
      flavours: typeof elfWorldELiquidFlavours;
      stockQuantity: number;
    }) {
      const priceCents = Math.round(priceEuro * 100);

      const product = await prisma.product.create({
        data: {
          name,
          type: ProductType.LIQUID,
          imageUrl: imageUrl ?? null,
          liquidSpec: {
            create: {
              bottleMl,
              nicotinePct,
              variants: {
                create: flavours.map((f) => ({
                  flavourId: f.id,
                  priceCents,
                  stock: stockQuantity,
                })),
              },
            },
          },
          priceTiers: {
            createMany: {
              data: [{ unit: Unit.BOTTLE, priceCents }],
            },
          },
          stockItems: {
            createMany: {
              data: [{ unit: Unit.BOTTLE, quantity: stockQuantity }],
            },
          },
        },
      });
      return product;
    }

    await createLiquidProduct({
      name: "ELF WORLD E-LIQUID 30ML",
      bottleMl: 30,
      nicotinePct: 5,
      priceEuro: 10,
      stockQuantity: 200,
      flavours: elfWorldELiquidFlavours,
      imageUrl:
        "https://image.made-in-china.com/2f0j00eMiVbSpynHUz/Elf-World-Nicotine-Salt-Vape-Juice-10ml-30ml-0-2-5-0mg-20mg-50mg-60mg-Customizable-ODM-OEM.webp",
    });
    //#endregion

    console.log("Seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
