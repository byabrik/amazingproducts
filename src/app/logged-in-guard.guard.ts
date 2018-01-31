import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FacebookService } from 'ngx-facebook/dist/esm/providers/facebook';
import { LoginStatus } from 'ngx-facebook';

@Injectable()
export class LoggedInGuardGuard implements CanActivate {

  constructor(private fb: FacebookService){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let loggedIn = false;
      this.fb.getLoginStatus().then((loginStatus: LoginStatus) => {
        loggedIn = loginStatus.status === 'connected';
      });

      return loggedIn;
  }
}
