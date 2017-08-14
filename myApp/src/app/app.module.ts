import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appService } from './app.service';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'cart', component: CartComponent }
]

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
  AppComponent,
  ListComponent,
  CartComponent
  ],
  imports: [
  BrowserModule,
  routing,
  HttpModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
