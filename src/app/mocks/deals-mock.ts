import { Deal } from "../models/deal";
import { MOCK_PRODUCTS } from "./products-mock";

export const MOCK_DEALS = [
    new Deal(1, 1, new Date(1984, 7, 5), new Date(1845, 6, 3), MOCK_PRODUCTS[0], new Array<Number>()),
    new Deal(2, 1, new Date(1984, 7, 5), new Date(1845, 6, 3), MOCK_PRODUCTS[1], new Array<Number>()),
    new Deal(3, 1, new Date(1984, 7, 5), new Date(1845, 6, 3), MOCK_PRODUCTS[2], new Array<Number>()),
    new Deal(4, 1, new Date(1984, 7, 5), new Date(1845, 6, 3), MOCK_PRODUCTS[3], new Array<Number>())
  ];
  