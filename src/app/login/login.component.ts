import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginStatus } from 'ngx-facebook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // TODO: convert to configuration service variables
  private appId: string = '272057439991866';
  private redirectUrl: string = 'http://localhost:4200/login-redirect';

  constructor(private fb: FacebookService, 
              private router: Router) {
    fb.getLoginStatus()
    .then((loginStatus: LoginStatus) => {
        if(loginStatus.status == 'connected') {
          this.router.navigate(['/products']);
        } else {
          // TODO: pass state down to login-redirect page for validation
          window.location.href = `https://www.facebook.com/v2.11/dialog/oauth?client_id=${this.appId}&redirect_uri=${this.redirectUrl}&state=${Math.random().toString(36).substring(2, 5)}`
        }
    })
    // TODO: redirect to error page with an a standard error message, send logs to server
    .catch((error: any) => console.error(error));
   }
}
