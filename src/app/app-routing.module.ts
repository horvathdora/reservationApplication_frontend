import { NgModule } from '@angular/core';
/*Note: RouterModule is a built-in routing module 
        for routing such as RouterLink, RouterLinkActive, RouterLinkWithHref and RouterOutlet.*/
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ApartmentsComponent } from './apartments/apartments.component';


const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'user',  component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/apartments', component: ApartmentsComponent},
  {path: 'auth/login',component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, RegisterComponent, HomeComponent]