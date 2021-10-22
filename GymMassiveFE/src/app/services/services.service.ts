import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class Services {
  public GetHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
  }
}
