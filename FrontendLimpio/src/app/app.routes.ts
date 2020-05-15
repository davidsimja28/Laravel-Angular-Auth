import { RouterModule, Routes, Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';




const APP_ROUTES: Routes = [

    {path: 'home', component: HomeComponent},  
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {path: '**', pathMatch: 'full' , redirectTo: 'menu' },
    {path: 'navbar', component: NavbarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'request', component: RequestResetComponent},
    {path: 'response', component: ResponseResetComponent},


    


    
];
export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);