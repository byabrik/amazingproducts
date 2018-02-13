import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DealComponent } from './deal/deal.component';
import { DealDetailPageComponent } from './deal-detail-page/deal-detail-page.component';
import { DealsService } from './deals.service';
import { MOCK_PRODUCTS } from '../mocks/products-mock';
import { MOCK_DEALS } from '../mocks/deals-mock';
import { AuthService } from '../auth/auth.service';

const appRoutes: Routes = [  
  { path: 'deals', component: DealComponent, pathMatch: 'full' },
  { path: 'deal/:id', component: DealDetailPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    DealComponent,
    DealDetailPageComponent
  ],
  declarations: [DealComponent, DealDetailPageComponent],
  providers: [DealsService, AuthService]
})
export class DealsModule { }
