import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';
import { Deal } from '../../models/deal';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  public deals: Deal[];
  public selectedDeal: Deal;

  constructor(
    private dealsService: DealsService
  ) { }

  ngOnInit() {
    this.dealsService.getDeals().subscribe((allDeals) => {
      this.deals = allDeals;
    });
  }

  onSelect(deal: Deal) : void {
    this.selectedDeal = deal;
  }
}
