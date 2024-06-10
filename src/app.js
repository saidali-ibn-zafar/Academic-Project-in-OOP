class CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate,
    amountPerUse,
    concentration = null
  ) {
    this.name = name;
    this.brand = brand;
    this.volume = volume;
    this.price = price;
    this.intendedUsage = intendedUsage;
    this.expirationDate = expirationDate;
    this.amountPerUse = amountPerUse;
    this.concentration = concentration;
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
    let volumeInML = 0;
    let amountPerUse = parseInt(this.amountPerUse);
    if (this.volume.includes("ml")) {
      volumeInML = parseInt(this.volume);
    } else if (this.volume.includes("L")) {
      volumeInML = parseFloat(this.volume) * 1000;
    }

    let totalUses = volumeInML / amountPerUse;

    return `${this.name} costs ${(this.price / totalUses).toFixed(
      2
    )}PLN per use.`;
  }

  reactToSurface(surfaceType) {
    throw new Error(
      'Method "reactToSurface" must be implemented by subclasses.'
    );
  }

  getSafetyInstructions() {
    return `Please read specific safety instructions for ${this.name}.`;
  }
}

class Detergent extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate,
    amountPerUse,
    concentration
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

  reactToSurface(surfaceType) {
    if (typeof surfaceType === "string") {
      switch (surfaceType.toLowerCase()) {
        case "glass":
          return `When applied to glass surfaces, ${this.name} produces a streak-free shine, removing dirt and grime effectively.`;
        case "metal":
          return `The metal surfaces become spotless and shiny with the use of ${this.name}, removing grease and stains effectively.`;
        case "fabric":
          return `When used on fabric surfaces, ${this.name} helps to lift and remove tough stains, leaving fabrics clean and fresh.`;
        default:
          throw new Error("Surface type not supported or contact with seller");
      }
    } else {
      throw new Error("Surface type must be a string.");
    }
  }

  getSafetyInstructions() {
    return `${this.name}: Wear gloves when using. Avoid contact with eyes and prolonged skin contact.`;
  }
}

class Bleach extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate,
    amountPerUse,
    concentration
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

  getSafetyInstructions() {
    return `${this.name}: Use in a well-ventilated area. Do not mix with other chemicals, especially ammonia.`;
  }
}

class Vinegar extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    amountPerUse,
    concentration
  ) {
    super(
      name,
      brand,
      volume,
      price,
      intendedUsage,
      null,
      amountPerUse,
      concentration
    );
  }

  checkExpiration() {
    return `${this.name} never expires if kept in good condition.`;
  }

  getSafetyInstructions() {
    return `${this.name}: Avoid inhalation and contact with eyes. Store in a cool, dry place.`;
  }
}

module.exports = { CleaningProduct, Detergent, Bleach, Vinegar };

const surfaceCleaner = new CleaningProduct(
  "Surface Cleaner",
  "Clean Life",
  "750ml",
  22.5,
  "cleaning surface",
  "2025-02-10",
  "100ml",
  null
);

const dishDetergent = new Detergent(
  "Dish Detergent",
  "Fast Cleaning",
  "900ml",
  16.99,
  "washing dishes",
  "2022-12-02",
  "100ml",
  10
);

const laundryBleach = new Bleach(
  "Laundry Bleach",
  "Happy Cleaning",
  "1L",
  14.45,
  "laundry",
  "2024-05-07",
  "75ml",
  5
);

const cleaningVinegar = new Vinegar(
  "Cleaning Vinegar",
  "Pure Clean",
  "500ml",
  12.99,
  "multi-purpose cleaning",
  "50ml",
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
