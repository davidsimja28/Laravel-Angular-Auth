import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { JarvisService } from './Services/jarvis.service';
import { TokenService } from './Services/token.service';
import { AuthService } from './Services/auth.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    PerfilComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ErrorComponent,
    InicioComponent,
    

  ],


  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
  ],
  providers: [JarvisService,
              TokenService,
              AuthService,
              AfterLoginService,
              BeforeLoginService,
              { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
              SnotifyService
              ],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
