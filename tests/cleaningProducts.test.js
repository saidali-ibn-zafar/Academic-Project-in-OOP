const { CleaningProduct, Detergent, Bleach, Vinegar } = require("../src/app");

describe("CleaningProduct Classes", () => {
  let dishDetergent;
  let surfaceCleaner;
  let laundryBleach;
  let cleaningVinegar;

  beforeAll(() => {
    dishDetergent = new Detergent(
      "Dish Detergent",
      "Fast Cleaning",
      "900ml",
      16.99,
      "washing dishes",
      "2022-12-02",
      10
    );

    surfaceCleaner = new CleaningProduct(
      "Surface Cleaner",
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

  describe("use method", () => {
    test("should return correct use information for Detergent", () => {
      const result = dishDetergent.use();
      expect(result).toBe(
        "Dish Detergent is used for washing dishes. It has a concentration of 10%."
      );
    });

    test("should return correct use information for Bleach", () => {
      const result = laundryBleach.use();
      expect(result).toBe(
        "Laundry Bleach is used for laundry. It has a concentration of 5%."
      );
    });

    test("should return correct use information for Vinegar", () => {
      const result = cleaningVinegar.use();
      expect(result).toBe(
        "Cleaning Vinegar is used for multi-purpose cleaning. It has a concentration of 6%."
      );
    });

    test("should return correct use information for CleaningProduct", () => {
      const result = surfaceCleaner.use();
      expect(result).toBe("Surface Cleaner is used for cleaning surface.");
    });
  });

  describe("checkExpiration method", () => {
    test("should return expired for past expiration date", () => {
      const result = dishDetergent.checkExpiration();
      expect(result).toBe("Dish Detergent has expired.");
    });

    test("should return not expired for future expiration date", () => {
      const result = surfaceCleaner.checkExpiration();
      expect(result).toBe("Surface Cleaner is not expired.");
    });

    test("should return expired for past expiration date", () => {
      const result = laundryBleach.checkExpiration();
      expect(result).toBe("Laundry Bleach has expired.");
    });

    test("should return never expires for Vinegar", () => {
      const result = cleaningVinegar.checkExpiration();
      expect(result).toBe(
        "Cleaning Vinegar never expires if kept in good condition."
      );
    });
  });

  describe("calculateCostPerUse method", () => {
    test("should return correct cost per use for Detergent", () => {
      const result = dishDetergent.calculateCostPerUse();
      expect(result).toBe("Dish Detergent costs $1.70 per use.");
    });

    test("should return correct cost per use for Bleach", () => {
      const result = laundryBleach.calculateCostPerUse();
      expect(result).toBe("Laundry Bleach costs $0.96 per use.");
    });

    test("should return correct cost per use for Vinegar", () => {
      const result = cleaningVinegar.calculateCostPerUse();
      expect(result).toBe("Cleaning Vinegar costs $0.65 per use.");
    });

    test("should return correct cost per use for CleaningProduct", () => {
      const result = surfaceCleaner.calculateCostPerUse();
      expect(result).toBe("Surface Cleaner costs $4.50 per use.");
    });
  });
});
