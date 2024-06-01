class CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate,
    amountPerUse,
    concentration = null,
    type = "liquid"
  ) {
    this.name = name;
    this.brand = brand;
    this.volume = volume;
    this.price = price;
    this.intendedUsage = intendedUsage;
    this.expirationDate = expirationDate;
    this.amountPerUse = amountPerUse;
    this.concentration = concentration;
    this.type = type;
  }

  use() {
    let usageInfo = `${this.name} is used for ${this.intendedUsage}.`;
    if (this.concentration !== null) {
      usageInfo += ` It has a concentration of ${this.concentration}%.`;
    }
    return usageInfo;
  }

  checkExpiration() {
    if (this.expirationDate) {
      if (new Date() > new Date(this.expirationDate)) {
        return `${this.name} has expired.`;
      } else {
        return `${this.name} is not expired.`;
      }
    } else {
      return `${this.name} does not have an expiration date.`;
    }
  }

  calculateCostPerUse() {
    let volume = 0;
    let totalUses = 0;

    switch (this.type) {
      case "liquid":
        if (this.volume.includes("ml")) {
          volume = parseInt(this.volume);
        } else if (this.volume.includes("L")) {
          volume = parseFloat(this.volume) * 1000;
        } else {
          throw new Error(
            "Invalid volume unit for liquid. Must be in milliliters (ml) or liters (L)."
          );
        }
        totalUses = volume / this.amountPerUse;
        break;

      case "capsule":
        totalUses = parseInt(this.volume);
        break;

      case "powder":
        if (this.volume.includes("g")) {
          volume = parseInt(this.volume);
        } else if (this.volume.includes("kg")) {
          volume = parseFloat(this.volume) * 1000;
        } else {
          throw new Error(
            "Invalid volume unit for powder. Must be in grams (g) or kilograms (kg)."
          );
        }
        totalUses = volume / this.amountPerUse;
        break;

      default:
        throw new Error("Unknown Type!");
    }

    const costPerUse = this.price / totalUses;
    return `${this.name} costs $${costPerUse.toFixed(2)} per use.`;
  }
}

class Detergent extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate = null,
    concentration,
    amountPerUse
  ) {
    super(
      name,
      brand,
      volume,
      price,
      intendedUsage,
      expirationDate,
      amountPerUse,
      concentration
    );
  }
}

class Bleach extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate = null,
    concentration,
    amountPerUse
  ) {
    super(
      name,
      brand,
      volume,
      price,
      intendedUsage,
      expirationDate,
      amountPerUse,
      concentration
    );
  }
}

class Vinegar extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    concentration,
    amountPerUse
  ) {
    super(
      name,
      brand,
      volume,
      price,
      intendedUsage,
      null,
      null,
      concentration,
      amountPerUse
    );
  }

  checkExpiration() {
    return `${this.name} never expires if kept in good condition.`;
  }
}

module.exports = { CleaningProduct, Detergent, Bleach, Vinegar };

const surfaceCleaner = new CleaningProduct(
  "Surface Cleaner",
  "Clean Life",
  "750ml",
  22.5,
  "cleaning surface",
  "2025-02-10"
);

const dishDetergent = new Detergent(
  "Dish Detergent",
  "Fast Cleaning",
  "900ml",
  16.99,
  "washing dishes",
  "2022-12-02",
  10,
  10
);

const laundryBleach = new Bleach(
  "Laundry Bleach",
  "Happy Cleaning",
  "1L",
  14.45,
  "laundry",
  "2024-05-07",
  5,
  5
);

const cleaningVinegar = new Vinegar(
  "Cleaning Vinegar",
  "Pure Clean",
  "500ml",
  12.99,
  "multi-purpose cleaning",
  6
);

console.log(dishDetergent.use());
console.log(surfaceCleaner.use());
console.log(laundryBleach.use());
console.log(cleaningVinegar.use());

console.log(dishDetergent.checkExpiration());
console.log(surfaceCleaner.checkExpiration());
console.log(laundryBleach.checkExpiration());
console.log(cleaningVinegar.checkExpiration());

console.log(dishDetergent.calculateCostPerUse());
console.log(surfaceCleaner.calculateCostPerUse());
console.log(laundryBleach.calculateCostPerUse());
console.log(cleaningVinegar.calculateCostPerUse());
