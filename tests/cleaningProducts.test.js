const { CleaningProduct, Detergent, Bleach, Vinegar } = require("../src/app");

describe("CleaningProduct", () => {
  test("should create a CleaningProduct instance", () => {
    const surfaceCleaner = new CleaningProduct(
      "Surface cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      "2025-02-10"
    );

    expect(surfaceCleaner.name).toBe("Surface cleaner");
    expect(surfaceCleaner.brand).toBe("Clean Life");
    expect(surfaceCleaner.volume).toBe("750ml");
    expect(surfaceCleaner.price).toBe(22.5);
    expect(surfaceCleaner.purpose).toBe("cleaning surface");
    expect(surfaceCleaner.expirationDate).toBe(new Date("2025-02-10"));
  });

  test("use() method should return indended usage", () => {
    const surfaceCleaner = new CleaningProduct(
      "Surface cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      "2025-02-10"
    );

    expect(surfaceCleaner.use()).toBe(
      "Surface cleaner is used for cleaning surface."
    );
  });

  test("checkExpiration() method should return expiration status", () => {
    const expirationDate = new Date("2025-02-10");
    const currentDate = new Date();

    const surfaceCleaner = new CleaningProduct(
      "Surface cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      expirationDate
    );

    if (surfaceCleaner.expirationDate) {
      if (currentDate > expirationDate) {
        expect(surfaceCleaner.checkExpiration()).toBe(
          "Surface cleaner has expired."
        );
      } else {
        expect(surfaceCleaner.checkExpiration()).toBe(
          "Surface cleaner is not expired."
        );
      }
    } else {
      expect(surfaceCleaner.checkExpiration()).toBe(
        "Surface cleaner does not have an expiration date."
      );
    }
  });

  test(`calculateCostPerUse() method should return cost per use`, () => {
    const surfaceCleaner = new CleaningProduct(
      "Surface cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      "2025-02-10"
    );
  });
});
