const { CleaningProduct, Detergent, Bleach } = require("../src/app");

describe("CleaningProduct", () => {
  test("use() method should return indended usage", () => {
    const surfaceCleaner = new CleaningProduct(
      "Surface cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      new Date("2025-02-10")
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
});
