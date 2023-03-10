import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent} from './user/user.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'products', component:ProductsComponent},
  {path: 'user', component:UserComponent},
  { path: "**",redirectTo:"home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
