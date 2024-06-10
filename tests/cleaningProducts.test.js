const { CleaningProduct, Detergent, Bleach, Vinegar } = require("../src/app");

describe("CleaningProduct", () => {
  let surfaceCleaner;

  beforeEach(() => {
    surfaceCleaner = new CleaningProduct(
      "Surface Cleaner",
      "Clean Life",
      "750ml",
      22.5,
      "cleaning surface",
      "2025-02-10",
      "120ml",
      null
    );
  });

  test("use returns correct usage information", () => {
    expect(surfaceCleaner.use()).toBe(
      "Surface Cleaner is used for cleaning surface."
    );
  });

  test("checkExpiration returns correct expiration status", () => {
    expect(surfaceCleaner.checkExpiration()).toBe(
      "Surface Cleaner is not expired."
    );
  });

  test("calculateCostPerUse calculates cost per use correctly", () => {
    expect(surfaceCleaner.calculateCostPerUse()).toBe(
      "Surface Cleaner costs 3.60PLN per use."
    );
  });

  test("getSafetyInstructions returns correct safety instructions", () => {
    expect(surfaceCleaner.getSafetyInstructions()).toBe(
      "Please read specific safety instructions for Surface Cleaner."
    );
  });
});

describe("Detergent", () => {
  let dishDetergent;

  beforeEach(() => {
    dishDetergent = new Detergent(
      "Dish Detergent",
      "Fast Cleaning",
      "900ml",
      16.99,
      "washing dishes",
      "2022-12-02",
      "100ml",
      10
    );
  });

  test("use returns correct usage information", () => {
    expect(dishDetergent.use()).toBe(
      "Dish Detergent is used for washing dishes. It has a concentration of 10%."
    );
  });

  test("checkExpiration returns correct expiration status", () => {
    expect(dishDetergent.checkExpiration()).toBe("Dish Detergent has expired.");
  });

  test("calculateCostPerUse calculates cost per use correctly", () => {
    expect(dishDetergent.calculateCostPerUse()).toBe(
      "Dish Detergent costs 1.89PLN per use."
    );
  });

  test("getSafetyInstructions returns correct safety instructions", () => {
    expect(dishDetergent.getSafetyInstructions()).toBe(
      "Dish Detergent: Wear gloves when using. Avoid contact with eyes and prolonged skin contact."
    );
  });
  test("should return correct message for glass surface", () => {
    expect(dishDetergent.reactToSurface("glass")).toBe(
      "When applied to glass surfaces, Dish Detergent produces a streak-free shine, removing dirt and grime effectively."
    );
  });

  test("should return correct message for metal surface", () => {
    expect(dishDetergent.reactToSurface("metal")).toBe(
      "The metal surfaces become spotless and shiny with the use of Dish Detergent, removing grease and stains effectively."
    );
  });

  test("should return correct message for fabric surface", () => {
    expect(dishDetergent.reactToSurface("fabric")).toBe(
      "When used on fabric surfaces, Dish Detergent helps to lift and remove tough stains, leaving fabrics clean and fresh."
    );
  });

  test("should throw error for unsupported surface type", () => {
    expect(() => dishDetergent.reactToSurface("wood")).toThrow(
      "Surface type not supported. Please contact the seller for more..."
    );
  });

  test("should throw error if surface type is not a string", () => {
    expect(() => dishDetergent.reactToSurface(123)).toThrow(
      "Surface type must be a string."
    );
  });
});

describe("Bleach", () => {
  let laundryBleach;

  beforeEach(() => {
    laundryBleach = new Bleach(
      "Laundry Bleach",
      "Happy Cleaning",
      "1L",
      14.45,
      "laundry",
      "2024-05-07",
      "75ml",
      5
    );
  });

  test("use returns correct usage information", () => {
    expect(laundryBleach.use()).toBe(
      "Laundry Bleach is used for laundry. It has a concentration of 5%."
    );
  });

  test("checkExpiration returns correct expiration status", () => {
    expect(laundryBleach.checkExpiration()).toBe("Laundry Bleach has expired.");
  });

  test("calculateCostPerUse calculates cost per use correctly", () => {
    expect(laundryBleach.calculateCostPerUse()).toBe(
      "Laundry Bleach costs 1.08PLN per use."
    );
  });

  test("getSafetyInstructions returns correct safety instructions", () => {
    expect(laundryBleach.getSafetyInstructions()).toBe(
      "Laundry Bleach: Use in a well-ventilated area. Do not mix with other chemicals, especially ammonia."
    );
  });

  test("should return correct message for glass surface", () => {
    expect(laundryBleach.reactToSurface("glass")).toBe(
      "Effectively removes stains and disinfects, leaving glass sparkling clean when used on glass surfaces with Laundry Bleach."
    );
  });

  test("should return correct message for metal surface", () => {
    expect(laundryBleach.reactToSurface("metal")).toBe(
      "Sanitizes and shines metal surfaces, effectively removing stains and odors with Laundry Bleach."
    );
  });

  test("should return correct message for fabric surface", () => {
    expect(laundryBleach.reactToSurface("fabric")).toBe(
      "Whitens and brightens fabrics, removing tough stains and odors when added to laundry with Laundry Bleach."
    );
  });

  test("should throw error for unsupported surface type", () => {
    expect(() => laundryBleach.reactToSurface("wood")).toThrow(
      "Surface type not supported. Please contact the seller for more..."
    );
  });

  test("should throw error if surface type is not a string", () => {
    expect(() => laundryBleach.reactToSurface(123)).toThrow(
      "Surface type must be a string."
    );
  });
});

describe("Vinegar", () => {
  let cleaningVinegar;

  beforeEach(() => {
    cleaningVinegar = new Vinegar(
      "Cleaning Vinegar",
      "Pure Clean",
      "500ml",
      12.99,
      "multi-purpose cleaning",
      "50ml",
      6
    );
  });

  test("use returns correct usage information", () => {
    expect(cleaningVinegar.use()).toBe(
      "Cleaning Vinegar is used for multi-purpose cleaning. It has a concentration of 6%."
    );
  });

  test("checkExpiration returns correct expiration status", () => {
    expect(cleaningVinegar.checkExpiration()).toBe(
      "Cleaning Vinegar never expires if kept in good condition."
    );
  });

  test("calculateCostPerUse calculates cost per use correctly", () => {
    expect(cleaningVinegar.calculateCostPerUse()).toBe(
      "Cleaning Vinegar costs 1.30PLN per use."
    );
  });

  test("getSafetyInstructions returns correct safety instructions", () => {
    expect(cleaningVinegar.getSafetyInstructions()).toBe(
      "Cleaning Vinegar: Avoid inhalation and contact with eyes. Store in a cool, dry place."
    );
  });

  test("should return correct message for glass surface", () => {
    expect(cleaningVinegar.reactToSurface("glass")).toBe(
      "Glass surfaces are effectively cleaned and streak-free when treated with Cleaning Vinegar."
    );
  });

  test("should return correct message for metal surface", () => {
    expect(cleaningVinegar.reactToSurface("metal")).toBe(
      "Metal surfaces shine brightly and are effectively cleaned with the use of Cleaning Vinegar."
    );
  });

  test("should return correct message for fabric surface", () => {
    expect(cleaningVinegar.reactToSurface("fabric")).toBe(
      "Fabrics are gently cleaned and refreshed when treated with Cleaning Vinegar."
    );
  });

  test("should throw error for unsupported surface type", () => {
    expect(() => cleaningVinegar.reactToSurface("wood")).toThrow(
      "Surface type not supported. Please contact the seller for more..."
    );
  });

  test("should throw error if surface type is not a string", () => {
    expect(() => cleaningVinegar.reactToSurface(123)).toThrow(
      "Surface type must be a string."
    );
  });
});
