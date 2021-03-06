import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

    public title = "Amazing Products";

    constructor(private fb: FacebookService) {
      let initParams: InitParams = {
        appId: '272057439991866',
        xfbml: false,
        version: 'v2.11'
      };
      fb.init(initParams);         
    }
}
