export class Product {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public imageUrl: string,
      public price: string,
      public available_on: Date,
      public requires_prime: boolean
    ) {}
  }