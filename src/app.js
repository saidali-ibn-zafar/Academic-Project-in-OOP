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
