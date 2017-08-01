import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmptyDirective } from './directive/empty.directive';
import { EmptyImageDirective } from './directive/emptyImage.directive';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { appService } from './service/app.service';
// import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmptyDirective,
    EmptyImageDirective,
    ListComponent,
    DetailComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
