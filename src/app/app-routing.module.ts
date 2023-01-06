import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { ProductsComponent } from './products/products.component';
=======
import { UserComponent} from './user/user.component';
>>>>>>> 46b08159ab8beb0c8c30ca49a94c3732ca9377d4

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
<<<<<<< HEAD
  { path: 'products', component:ProductsComponent},
=======
  {path: 'user', component:UserComponent},
>>>>>>> 46b08159ab8beb0c8c30ca49a94c3732ca9377d4
  { path: "**",redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
