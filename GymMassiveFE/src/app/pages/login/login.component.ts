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

  email: any = "";
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
        var loginResponse: LoginResponse = result;
        console.log(loginResponse)
        this.router.navigate(['home']);
      },
      error => {

      }
    );
  }

}
