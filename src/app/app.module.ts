import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { ProductsComponent } from './products/products.component';
import { BoxComponent } from './box/box.component';
=======
import { UserComponent } from './user/user.component';
>>>>>>> 46b08159ab8beb0c8c30ca49a94c3732ca9377d4

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    CustomPipe,
<<<<<<< HEAD
    ProductsComponent,
    BoxComponent
=======
    UserComponent
>>>>>>> 46b08159ab8beb0c8c30ca49a94c3732ca9377d4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
