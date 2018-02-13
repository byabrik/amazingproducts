import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


import { AppComponent } from './app.component';
import { FacebookModule } from 'ngx-facebook';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LoginRedirectComponent } from './login/login-redirect.component';
import { LoggedInGuardGuard } from './logged-in-guard.guard';
import { DealsModule } from './deals/deals.module';

const appRoutes: Routes = [
  // { path: 'products', component: ProductsComponent, canActivate: [LoggedInGuardGuard]  },
  // { path: 'login-redirect', component: LoginRedirectComponent },  
  // { path: 'login', component: LoginComponent },
  // { path: 'error', component: ErrorComponent },  
 // { path: 'deals', loadChildren: './deals/deals.module#DealsModule' }  
  { path: '',   redirectTo: '/deals', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
     LoginComponent,
     ErrorComponent,
     LoginRedirectComponent
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true,
        preloadingStrategy: PreloadAllModules 
      }
    ),
    DealsModule
  ],
  providers: [LoggedInGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


