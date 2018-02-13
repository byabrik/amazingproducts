import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Deal } from '../models/deal';
import { Product } from '../models/product';
import { MOCK_DEALS } from '../mocks/deals-mock';

@Injectable()
export class DealsService {

  constructor() { }

  getDeals() { return Observable.of(MOCK_DEALS); }

  getDeal(id: Number | string) {
    return this.getDeals()
    .map(deals => deals.find(deal => deal.id === +id));
  }
}
