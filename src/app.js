class CleaningProduct {
  constructor(name, brand, volume, price, intendedUsage) {
    this.name = name;
    this.brand = brand;
    this.volume = volume;
    this.price = price;
    this.intendedUsage = intendedUsage;
  }

  use() {
    return `${this.name} is used for ${this.intendedUsage}.`;
  }
}
