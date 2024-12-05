import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprojectsComponent} from './adminprojects/adminprojects.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { AuthGuard } from './garde/auth.guard';

const routes: Routes = [
  {path:"home",component : HomeComponent},
  {path:"",component : HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: UserprofileComponent , canActivate: [AuthGuard] },
  { path: 'adminuser', component: AdminusersComponent },
  { path: 'adminprj', component: AdminprojectsComponent },
  { path: 'userd', component: UserdetailsComponent ,canActivate: [AuthGuard] },
  { path: 'project/:id', component:  ProjectdetailsComponent , canActivate: [AuthGuard],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
