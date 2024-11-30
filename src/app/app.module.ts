import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprojectsComponent } from './adminprojects/adminprojects.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserprofileComponent,
    AdminprojectsComponent,
    AdminusersComponent,
    ProjectdetailsComponent,
    UserdetailsComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
