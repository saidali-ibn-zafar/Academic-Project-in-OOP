const { CleaningProduct, Detergent, Bleach, Vinegar } = require("../src/app");

describe("CleaningProduct Classes", () => {
  let dishDetergent;
  let surfaceCleaner;
  let laundryBleach;
  let cleaningVinegar;

  beforeAll(() => {
    dishDetergent = new Detergent(
      "Dish detergent",
      "Fast Cleaning",
      "900ml",
      16.99,
      "washing dishes",
      "2022-12-02",
      10
    );

    surfaceCleaner = new CleaningProduct(
      "Surface cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      "2025-02-10"
    );

    laundryBleach = new Bleach(
      "Laundry Bleach",
      "Happy Cleaning",
      "1L",
      14.45,
      "laundry",
      "2024-05-07",
      5
    );

    cleaningVinegar = new Vinegar(
      "Cleaning Vinegar",
      "Pure Clean",
      "500ml",
      12.99,
      "multi-purpose cleaning",
      6
    );
  });

  describe("use method", () => {});

  describe("checkExpiration method", () => {});

  describe("calculateCostPerUse method", () => {});
});
