import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventFromComponent } from './event-from/event-from.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'showevent',component:EventFromComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
