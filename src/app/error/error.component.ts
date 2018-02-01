import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router/src/shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let error = params['error'] === undefined ? null : params['error'];
      let error_reason = params['error_reason'] || null;
      this.message = error == null ? 'Unable to Process Your Request, Please Try Again Later' : `${error} - ${error_reason}`;
    });
  }
}
