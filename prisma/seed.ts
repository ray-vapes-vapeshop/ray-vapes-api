import { ChargingType, FlavourMode, PrismaClient, ProductType, Unit } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    //#region Sigarettes seeding
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
      "Pink lemonade",
      "Watermelon ice",
      "Kiwi Passion Guava",
      "Blueberry Pomegranate",
    ];

    const flavourRecords = [];
    for (const name of flavoursElfBarRaya) {
      const flavour = await prisma.flavour.upsert({
        where: { name },
        update: {},
        create: { name },
      });
      flavourRecords.push(flavour);
    }

    const elfBarRaya = await prisma.product.create({
      data: {
        name: "ElfBar Raya d3 25k",
        type: ProductType.ELECTRONIC_CIGARETTE,
        imageUrl: "https://example.com/elfbar-raya-d3.jpg",
        electronicSpec: {
          create: {
            puffs: 25000,
            nicotinePct: 5.0,
            chargingType: ChargingType.TYPE_C,
            flavourMode: FlavourMode.SINGLE,
            variants: {
              create: flavourRecords.map((f) => ({
                flavourId: f.id,
                priceCents: 2800,
                stock: 100,
              })),
            },
          },
        },
      },
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
