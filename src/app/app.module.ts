import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NgoRegComponent } from './components/ngo-reg/ngo-reg.component';
import { RestaurantRegComponent } from './components/restaurant-reg/restaurant-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RestaurantRegComponent,
    NgoRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
