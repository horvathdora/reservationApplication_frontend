import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApartmentInfoComponent } from './apartment-info/apartment-info.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApartmentsComponent } from './admin/apartments/apartments.component';
import { ApartmentService } from './admin/apartments/apartments.service';
import { AddApartmentComponent } from './admin/apartments/add-apatment/add-apartment/add-apartment/add-apartment.component';
import { AuthGuard } from './auth/auth.guard';
import { EditApartmentComponent } from './admin/apartments/edit-apartment/edit-apartment.component';
import { ReservationsComponent } from './admin/reservations/reservations/reservations.component';
import { ReservationService } from './admin/reservations/reservation.service';
import { UsersComponent } from './admin/users/users/users.component';
import { UsersService } from './admin/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ApartmentInfoComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ApartmentsComponent,
    AddApartmentComponent,
    EditApartmentComponent,
    ReservationsComponent,
    UsersComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders,
    ApartmentService,
    AuthGuard,
    ReservationService,
    UsersService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
