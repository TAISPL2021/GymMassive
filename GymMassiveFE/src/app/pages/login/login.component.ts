import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginResponse } from './model/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public email: any = "";
  public password: any = "";

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.email, this.password).subscribe(
      result => {
        let loginResponse: LoginResponse = result;
        sessionStorage.setItem("email", loginResponse.email);
        sessionStorage.setItem("token", loginResponse.token);
        sessionStorage.setItem("refreshToken", loginResponse.refreshToken);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
