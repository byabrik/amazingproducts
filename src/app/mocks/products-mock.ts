import { Product } from "../models/product";

export const MOCK_PRODUCTS = [
    new Product(1, "first", 'first description', null, '100', new Date(2018,2,7), true),
    new Product(1, "second", 'second description', null, '453', new Date(2018,2,7), true),
    new Product(1, "third", 'third description', null, '12', new Date(2018,2,7), true),
    new Product(1, "forth", 'forth description', null, '832', new Date(2018,2,7), true),
  ];