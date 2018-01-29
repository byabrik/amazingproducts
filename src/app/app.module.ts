import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FacebookModule } from 'ngx-facebook';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LoginRedirectComponent } from './login/login-redirect.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'login-redirect', component: LoginRedirectComponent },  
  { path: 'error', component: ErrorComponent },
  //error_reason
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    ErrorComponent,
    LoginRedirectComponent
  ],
  imports: [
    BrowserModule,
    FacebookModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


