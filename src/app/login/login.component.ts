import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginStatus } from 'ngx-facebook';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  // TODO: convert to configuration service variables
  private appId: string = '272057439991866';
  private redirectUrl: string = 'http://localhost:4200/login-redirect';

  constructor(private fb: FacebookService, 
              private router: Router,
              private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.authenticate();
  }

  authenticate() {
    this.fb.getLoginStatus()
        .then((loginStatus: LoginStatus) => {
            if(loginStatus.status == 'connected') {
              // TODO: navigate to return url
              this.redirectToReturnUrl();
            } else {             
              this.fb.login()
                .then((response: LoginResponse) => {
                  if(response.status === 'connected'){
                    this.redirectToReturnUrl();
                  }
                  else {
                    this.router.navigate(['error', {error: 'login_failed'}]);
                  }
                })
                .catch((error: any) => {
                  this.router.navigate(['error', {error: 'login_failed'}]);                  
                });
            }
        })
        // TODO: redirect to error page with an a standard error message, send logs to server
        .catch((error: any) => console.log(error));
  }

  redirectToReturnUrl(){
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      const returnUrl = params.get("returnUrl") || '/products';
      this.router.navigate([returnUrl]);  
    });
  }
}
