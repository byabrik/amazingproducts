import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';
import { LoginStatus } from 'ngx-facebook';

@Injectable()
export class LoggedInGuardGuard implements CanActivate {

  constructor(private fb: FacebookService, 
              private router: Router){
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      return this.fb.getLoginStatus().then((loginStatus: LoginStatus) => {
        if(loginStatus.status === 'connected'){
          return true;          
        }

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
      });
  }
}
