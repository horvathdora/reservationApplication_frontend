import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { ApartmentInfoComponent } from './shared/apartment-info/apartment-info.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApartmentsComponent } from './admin/apartments/apartments.component';
import { ApartmentService } from './services/apartments.service';
import { AuthGuard } from './auth/auth.guard';
import { ReservationsComponent } from './admin/reservations/reservations/reservations.component';
import { ReservationService } from './services/reservation.service';
import { UsersComponent } from './admin/users/users/users.component';
import { UsersService } from './services/users.service';

// Date time picker
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { AddReservationComponent } from './user/add-reservation/add-reservation.component';
import { ListReservationsComponent } from './user/list-reservations/list-reservations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ApartmentInfoComponent,
    LoginComponent,
    RegisterComponent,
    ApartmentsComponent,
    ReservationsComponent,
    UsersComponent,
    AddReservationComponent,
    ListReservationsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    jqxDateTimeInputModule,
    NgbModule
    
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
