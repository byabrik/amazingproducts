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
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      let error = params.get('error');
      this.message = error == null ? 'Unable to Process Your Request, Please Try Again Later' : error;
    });
  }
}
