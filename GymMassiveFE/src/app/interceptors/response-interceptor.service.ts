import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { switchMap, filter, take, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RefreshRequest } from '../models/RefreshRequest';


@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptorService implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) {
  }
  backendUrl = environment.url;
  headers = new HttpHeaders({});

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error: any) => {
      if (error.status === 401) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          this.refreshTokenSubject.next(null);
          req = this.setAuthHeader(req);
          if (error.error.message == 'Expired token') {
            return this.getRefreshToken().pipe(
              switchMap((token: any) => {
                this.isRefreshing = false;
                sessionStorage.setItem('token', token.access_token);
                sessionStorage.setItem('refreshToken', token.refresh_token);
                this.refreshTokenSubject.next(token);
                return next.handle(this.setAuthHeader(req));
              }));
          }
        } else {
          return this.refreshTokenSubject.pipe(filter(token => (token != null && token != undefined)), take(1), switchMap(() => {
            return next.handle(this.setAuthHeader(req))
          }));
        }
      } else if ((error.status === 500 || error.status === 401) && error.url.indexOf('users/refreshToken') > -1) {
        sessionStorage.clear();
        this.router.navigate(['login']);
        window.location.reload();
      }
    }));
  }

  private getRefreshToken(): Observable<any> {
    const refreshRequest: RefreshRequest = { refreshToken: sessionStorage.getItem('refreshToken') };
    return this.http.post(this.backendUrl + "refreshToken", refreshRequest, { withCredentials: true });
  }

  private setAuthHeader(req: HttpRequest<any>) {
    const headerName = 'Authorization';
    const token = sessionStorage.getItem('token');
    req = req.clone({ withCredentials: true, headers: req.headers.set(headerName, token + "") });
    return req;
  }
}