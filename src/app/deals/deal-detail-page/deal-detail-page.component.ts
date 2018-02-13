import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import { Deal } from '../../models/deal';
import { Observable } from 'rxjs/Observable';
import { DealsService } from '../deals.service';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/user';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-deal-detail-page',
  templateUrl: './deal-detail-page.component.html',
  styleUrls: ['./deal-detail-page.component.css']
})
export class DealDetailPageComponent implements OnInit {

  public deal$: Deal;
  public showSubscribeButton: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private dealsService: DealsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
      this.route.paramMap.switchMap((param: ParamMap) => this.dealsService.getDeal(param.get('id')))
                         .subscribe((deal: Deal) => this.prepareDeal(deal));
  }

  prepareDeal(deal: Deal) {
    this.authService.getCurrentUser().subscribe(
      user => {
        this.showSubscribeButton = deal.subscribedUsers.indexOf(user.id) === -1;
        this.deal$ = deal;
      }
    );
  }

  backToList(deal: Deal) : void {
    let dealId = deal ? deal.id : null;
    this.router.navigate(['/deals', {id: dealId}]);
  }

  subscribeToDeal(deal: Deal) : void {
    this.authService.getCurrentUser()
    .subscribe((user) => {
      if(deal.subscribedUsers.indexOf(user.id) === -1)
      {
        deal.subscribedUsers.push(user.id);
        this.showSubscribeButton = false;
        console.log(deal.subscribedUsers.indexOf(user.id) === -1);
      }
    });
  }
}
