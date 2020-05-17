import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarvisService } from 'src/app/Services/jarvis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private Jarvice:JarvisService,
    private Token: TokenService,
    private router : Router,
    private Auth : AuthService

    ) { }
  
  public error = null;

  public form = 
  {
    email:null,
    password:null
  };
  
  onSubmit()
  {
    this.Jarvice.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    
  }

  handleResponse(data)
  {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/inicio');
  }

  handleError(error)
  {
    this.error=error.error.error;
  }

  ngOnInit() {
  }

}
