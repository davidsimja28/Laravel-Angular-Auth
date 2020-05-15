import { RouterModule, Routes, Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';




const APP_ROUTES: Routes = [

    {path: 'home', component: HomeComponent},  
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {path: '**', pathMatch: 'full' , redirectTo: 'menu' },

    


    
];
export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);