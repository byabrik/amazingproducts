import { Component } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    template:''
})
  export class LoginRedirectComponent implements OnInit {

    constructor(private route: ActivatedRoute, 
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            if(params.get('error') === 'access_denied'){
                if(params.get('error_reason') === 'user_denied') {
                    this.router.navigate(['error', {error_reason: 'user_denied'}]);
                }
            }
        });
    }
  }