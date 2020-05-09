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
import { ApartmentsComponent } from './admin/apartments/apartments.component';
import { AddApartmentComponent } from './admin/apartments/add-apatment/add-apartment/add-apartment/add-apartment.component';
import { AuthGuard } from './auth/auth.guard';
import { EditApartmentComponent } from './admin/apartments/edit-apartment/edit-apartment.component';
import { ReservationsComponent } from './admin/reservations/reservations/reservations.component';
import { UsersComponent } from './admin/users/users/users.component';
import { AddReservationComponent } from './user/add-reservation/add-reservation.component';
import { ListReservationsComponent } from './user/list-reservations/list-reservations.component';


const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/apartments', component: ApartmentsComponent, canActivate: [AuthGuard]},
  {path: 'admin/add-apartment', component: AddApartmentComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit-apartment', component: EditApartmentComponent, canActivate: [AuthGuard]},
  {path: 'admin/reservations', component: ReservationsComponent, canActivate: [AuthGuard]},
  {path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard]},

  {path: 'user',  component: UserComponent},
  {path: 'user/reservation', component: AddReservationComponent, canActivate: [AuthGuard]},
  {path: 'user/list-reservation', component: ListReservationsComponent, canActivate: [AuthGuard]},

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