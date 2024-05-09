// Here below we have declared abstract base class
class CleaningProduct {
  constructor(name, brand, volume, price, intendedUsage, expirationDate) {
    this.name = name;
    this.brand = brand;
    this.volume = volume;
    this.price = price;
    this.intendedUsage = intendedUsage;
    this.expirationDate = expirationDate;
  }

  // use() - Polimorphic method to be aware of information about why it should be used...
  use() {
    return `${this.name} is used for ${this.intendedUsage}.`;
  }

  // checkExpiration() - Polimorhpic method to check expiration date...
  checkExpiration() {
    if (this.expirationDate) {
      const currentDate = new Date();

      if (currentDate > this.expirationDate) {
        return `${this.name} has expired.`;
      } else {
        return `${this.name} is not expired.`;
      }
    } else {
      return `${this.name} does not have an expiration date.`;
    }
  }
}

/*================================================================
  Some information about cleaning product examples that I will use:

  Detergent - is a cleaning agent that is used to remove dirt, grease, and  stains from surfaces, particularly in washing clothes and dishes. 

  Bleach - is a strong chemical compound used primarily as a disinfectant and whitening agent.
==================================================================*/

// Here we are starting to declare 'Detergent' class and it is a subclass of 'CleaningProduct'
class Detergent extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate = null,
    concentration
  ) {
    super(name, brand, volume, price, intendedUsage, expirationDate);
    this.concentration = concentration;
  }

  use() {
    return `${super.use()}. It has a concentration of ${this.concentration}.`;
  }
}

// And from here we are starting to declare 'Bleach' class, it is a subclass of 'CleaningProduct' class.
class Bleach extends CleaningProduct {
  constructor(
    name,
    brand,
    volume,
    price,
    intendedUsage,
    expirationDate = null,
    concentration
  ) {
    super(name, brand, volume, price, intendedUsage, expirationDate);
    this.concentration = concentration;
  }

  use() {
    return `${super.use()}. It has a concentration of ${this.concentration}.`;
  }
}

const dishDetergent = new Detergent(
  "Dish detergent",
  "Fast Cleaning",
  "900ml",
  16.99,
  "washing dishes",
  new Date("2022-12-02"),
  10
);

const surfaceCleaner = new CleaningProduct(
  "Surface cleaner",
  "Clean Life",
  "750ml",
  22.5,
  "cleaning surface",
  new Date("2025-02-10")
);

const laundryBleach = new Bleach(
  "LaundryBleach",
  "Happy Cleaning",
  "1L",
  14.45,
  "laundry",
  new Date("2024-05-07"),
  5
);

console.log(dishDetergent.use());
console.log(surfaceCleaner.use());
console.log(laundryBleach.use());

console.log(dishDetergent.checkExpiration());
console.log(surfaceCleaner.checkExpiration());
console.log(laundryBleach.checkExpiration());

module.exports = { CleaningProduct, Detergent, Bleach };
