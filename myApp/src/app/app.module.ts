import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';
import { DetailsComponent } from './details.component';
import { appService } from './app.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent,
    // children: [
    //   { path: 'edit', component: EditComponent }
    // ] 
  },
  { path: 'details/:id/edit', component: EditComponent }
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
  AppComponent,
  ListComponent, 
  DetailsComponent,
  EditComponent
  ],
  imports: [
  BrowserModule,
  routing,
  HttpModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
