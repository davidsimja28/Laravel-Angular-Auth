import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JarvisService } from 'src/app/Services/jarvis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  constructor(
    private Jarvis:JarvisService,
    private token:TokenService,
    private router:Router
    ) { }

  public form = 
  {
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };

  public error = [];


  onSubmit()
  {  
    this.Jarvis.signUp(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data)
  {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/perfil');
  }

  handleError(error)
  {
    this.error=error.error.errors;
  }



  ngOnInit() {
  }

}
