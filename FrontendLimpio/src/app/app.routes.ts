import { RouterModule, Routes, Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';




const APP_ROUTES: Routes = [

    
    { path: '', component: HomeComponent, canActivate: [BeforeLoginService] },

    { path: 'home', component: HomeComponent,canActivate: [BeforeLoginService] },

    { path: 'navbar', component: NavbarComponent, canActivate: [AfterLoginService] },

    { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]  },

    { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] },

    { path: 'perfil', component: PerfilComponent, canActivate: [AfterLoginService] },

    { path: 'inicio', component: InicioComponent, canActivate: [AfterLoginService] },

    { path: 'request', component: RequestResetComponent,canActivate: [BeforeLoginService] },

    { path: 'response', component: ResponseResetComponent, canActivate: [BeforeLoginService] },

    { path: '**', component: ErrorComponent },


    
];
export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);