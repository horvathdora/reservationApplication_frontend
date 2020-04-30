import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ApartmentInfoComponent } from './apartment-info/apartment-info.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentService } from './apartments/apartments.service';

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
    ApartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders, ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
