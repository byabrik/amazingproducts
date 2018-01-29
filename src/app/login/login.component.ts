import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginStatus } from 'ngx-facebook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private appId: string = '272057439991866';
  private redirectUrl: string = 'http://localhost:4200';

  constructor(private fb: FacebookService, 
              private router: Router) {
    fb.getLoginStatus()
    .then((loginStatus: LoginStatus) => {
        if(loginStatus.status == 'connected') {
          this.router.navigate(['/products']);
        } else {
          //this.loginWithFacebook();
          window.location.href = `https://www.facebook.com/v2.11/dialog/oauth?client_id=${this.appId}&redirect_uri=${this.redirectUrl}&state=${Math.random().toString(36).substring(2, 5)}`
        }
    })
    .catch((error: any) => console.error(error));
   }

   loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
