import { Component,OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  total: number;

  constructor(private _appService: appService) {
    this.total = 0;
  }

  ngDoCheck() {
    this.total = this._appService.getTotal();
  }

}
